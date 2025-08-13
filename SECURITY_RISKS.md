# SECURITY_RISKS.md

## Risk 1 — Arbitrary SQL execution / data exfiltration
**Description:** Malicious or accidental non-SELECT SQL (or clever SELECTs) could expose PII or large datasets.  
**Impact:** PII leakage, reputational/legal exposure, DoS through expensive queries.

**Mitigation**
- Accept **only single-statement SELECT** queries (parser check with `sqlparse`).
- Restrict allowed sources to pre-approved **views** (e.g. `survey.safe_responses`) — backend enforces this.
- Enforce an explicit **column allowlist** or masked columns in each view to prevent PII reconstruction.
- Execute queries server-side using a **service-only DB connection** (Supabase `service_role`) — never exposed to frontend.
- Apply `statement_timeout` and an enforced row `LIMIT` per query.
- Use DB-level protections such as **RLS** on raw tables even if using views.
- Prefer parameterized views/queries; avoid direct string interpolation into SQL.

**Fallback**
- Serve cached/precomputed JSON for demo queries and disable live analyze endpoint.

---

## Risk 2 — Compromised secrets (service_role or API key)
**Description:** If `SUPABASE_DB_URL`/`service_role` or `ANALYZE_API_KEY` leaks, attackers can access DB or abuse the API.  
**Impact:** Full DB access (if service_role abused), API abuse (cost, DoS).

**Mitigation**
- Store secrets in environment variables or Docker secrets only. **Never** commit secrets to git.
- Use pre-commit hooks or `git-secrets` and CI checks to block accidental commits of keys.
- Rotate keys regularly and immediately upon suspected exposure. Document rotation steps and responsible person.
- Use a least-privilege DB role for runtime where possible; reserve `service_role` strictly for server-side maintenance/actions.
- Log only hashed API keys (`sha256(api_key)`) — never raw keys.

**Fallback**
- Revoke and rotate affected credentials; use cached responses for demo continuity.

---

## Risk 3 — Unauthorized access / broken RBAC 
**Description:** Incorrect role mapping, invalid JWT, or missing verification may permit unauthorized queries.  
**Impact:** Unauthorized data access.

**Mitigation**
- **JWT verification:** Verify Supabase JWT on backend using JWKS (signature), check `exp` (expiry), and (optionally) `aud` (audience) and `iss` (issuer). Do not accept tokens without valid signature/expiry.
- **Do not trust frontend claims:** Do not authorize based on client-side stored role claims without server verification.
- Map `auth.uid()` to `public.profiles` and enforce `profiles.role` in server logic before executing queries.
- Use **Row Level Security (RLS)** and views in Supabase; backend enforces allowed-view restrictions.
- Implement server-side role-to-action mapping; never infer permissions client-side.

**Fallback**
- Limit analyze endpoint to admin-only; provide read-only `/examples/` endpoint for judges/demo.

---

## Risk 4 — JWT-specific risks
**Description:** JWTs (access or refresh tokens) might be stolen, replayed, or persist longer than intended, permitting unauthorized access until the token expires. JWT misconfiguration (missing audience / issuer checks) can allow forgery or token reuse.  
**Impact:** Unauthorized access, session hijacking, inability to immediately revoke a compromised JWT.

**Mitigation**
- **Short-lived access tokens:** Use short `exp` for access tokens and rely on short refresh flows for usability.
- **Refresh token protection:** Keep refresh tokens out of the browser where possible; rotate refresh tokens on use.
- **Audience (`aud`) and Issuer (`iss`) checks:** Enforce `aud` and `iss` validation during JWT verification if possible (`SUPABASE_JWT_AUD`).
- **JWKs caching with rotation handling:** Cache JWKS locally for performance; refresh on key rotation. Handle key rotation gracefully.
- **Replay detection (optional):** For high-sensitivity flows, require `jti` claim and keep a small server-side denylist or short-lived session registry to detect reuse — note: Supabase JWTs may not include `jti`.
- **Do not log full tokens:** Never write raw JWTs to logs. If you must record a token reference, log a short truncated fingerprint (e.g., `sha256(token)[:12]`).
- **Immediate actions on compromise:** Revoke refresh tokens (Supabase admin API if available) and rotate signing keys if necessary. Prepare to set `ANALYZE_ENABLED=false` and rotate service credentials.
- **Fallback:** If tokens are compromised and cannot be instantly revoked, disable analyze endpoint and run demo on cached responses.

---

## Risk 5 — CORS misconfiguration & API key misuse
**Description:** Allowing overly broad CORS origins (e.g., '*') can let malicious sites make authenticated requests. Weak or leaked API keys can let attackers bypass JWT auth.  
**Impact:** Unauthorized cross-site requests, data exfiltration, abuse of privileged endpoints.

**Mitigation:**
- Restrict CORS to known origins (localhost for dev, production domain in prod).
- Use long, random API keys stored in environment variables only.
- Rotate API keys periodically; revoke if leaked.
- Apply DRF throttling to API key endpoints.
- Never expose API key in frontend/browser code.

**Fallback:**
- Disable API key endpoints if misuse detected; rely on JWT auth only.

---


## Operational controls & monitoring 
- **Audit logging (metadata-only):** log `api_key_hash` (sha256), `user_id` (hashed or truncated), `query_length`, `latency_ms`, `rows_count`, `timestamp`, `auth_method` (api_key|supabase_jwt). **Never** log raw JWTs or query results.
- **Immutable logs:** write logs to stdout/central logging and preserve copies for forensic analysis.
- **Monitoring & alerts:** trigger alerts for:
  - repeated auth failures (>5/min) (possible brute-force/forgery),
  - suspicious token usage (same token used from multiple IPs, if visible),
  - high query volume from a single user (>X/min),
  - queries returning very large row counts (>5k),
  - repeated timeouts or slow queries.
- **Rate limiting:** DRF throttling (default: 30 req/min per user) or gateway-level limits.
- **Secrets management:** env vars / Docker secrets; rotate on suspicion.
- **CI checks:** run `pip-audit`, `bandit`, and pre-commit secret scans in CI.
- **Backups:** ensure Supabase-managed backups or DB snapshots are enabled for demo data.
- **Logs retention & deletion:** define retention period and deletion policy (documented in README).

---


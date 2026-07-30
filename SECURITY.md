# Security Policy

## Supported versions

The project is maintained from the `main` branch.

| Branch | Supported |
| --- | --- |
| `main` | Yes |
| Any other branch | No (development only) |

## Reporting a vulnerability

If you discover a security vulnerability, please report it privately by email:

- khrawklabs@outlook.com

Please include:

- A clear description of the issue
- Reproduction steps
- Impact assessment
- Suggested fix (if available)

We aim to acknowledge reports within 72 hours and provide an update after triage.

## Security controls configured in code

- CI security gate (lint, build, dependency audit)
- Secret scanning in CI (TruffleHog OSS)
- Static analysis (CodeQL)
- Automated dependency update monitoring (Dependabot)

## Known advisories accepted without a fix

### react-router / react-router-dom

`npm audit` reports high-severity advisories against `react-router` for the
range `7.12.0 - 8.2.0`. **No patched release exists**: the latest published
version is `7.18.2` and there is no `8.x` on npm, so the vulnerable range has
no upper exit.

`npm audit fix --force` "resolves" this by *downgrading* to `7.11.0` — a version
that merely predates the advisory range rather than fixing anything, while
giving up seven minor releases of unrelated fixes. We do not do this.

The advisories are also not reachable from this application. They target SSR,
RSC, prerendering and framework-mode features (`__manifest`, single-fetch,
`deserializeErrors`, RSC redirect handling). This app is a client-only SPA that
uses `BrowserRouter`, `Routes`, `Route`, `Link` and `Navigate` — no data router,
no loaders or actions, no server rendering. The only advisory that could apply
to a plain SPA is the open redirect via `<Link>` / `useNavigate`, which requires
a user-controlled navigation target; every route target in this codebase is a
hardcoded string literal.

Re-evaluate when a `react-router` release above `8.2.0` ships.

## Repository-level controls to enable in GitHub settings

To maximize repository security, enable these branch/ruleset controls for `main`:

- Require pull requests before merging
- Require at least 1 approval
- Dismiss stale approvals on new commits
- Require status checks to pass before merging
- Require conversation resolution before merging
- Block force pushes
- Block branch deletion
- Include administrators in protection rules

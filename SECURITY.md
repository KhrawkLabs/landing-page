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

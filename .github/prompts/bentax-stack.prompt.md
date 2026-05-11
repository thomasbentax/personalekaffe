---
agent: agent
description: Bentax IT infrastructure and tech stack — systems overview and integration rules for prototypes
---

# Bentax Tech Stack & Integration Rules

## Systems Overview

| System | Purpose | Access from prototype |
|---|---|---|
| Business Central (BC) | ERP — orders, inventory, finance | Via Power Automate only |
| Dynamics 365 CRM | Customer relations, sales pipeline | Via Power Automate only |
| Power Platform | Automation, flows, low-code apps | Power Automate HTTP trigger |
| SharePoint | Document management, intranet | Via Power Automate only |
| Struct PIM | Product information management | Via Power Automate only |
| Algolia | Search index (product data) | Public search API allowed directly |
| GitHub Pages | Prototype hosting (Phase 1) | — |
| Azure Static Web Apps | Production/advanced hosting (Phase 2) | — |

---

## Integration Rules

- Default: self-contained HTML/CSS/JS. CDN libraries via `<script>` tags allowed. No backend integrations unless explicitly requested.
- Public APIs (no credentials): direct JS calls allowed.
- APIs with credentials: route via Power Automate HTTP flow — never call directly.
- Internal systems (BC, D365, SharePoint, Struct PIM): Power Automate only.

## Power Automate URL Handling

- URL in `config.js` (gitignored — never commit)
- `config.example.js` committed as template
- Access via `window.BENTAX_CONFIG.flowUrl`
- Never hardcode trigger URL in source files
- Check `config.js` is in `.gitignore` before committing
- Remind user to fill in `config.js` after new flow setup

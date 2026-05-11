# Copilot Instructions

> All additions to this file must be written in English, regardless of the user's language for regular dialogue.

> Write all agent-facing files (instructions, prompts, skills) in terse, low-token style: short sentences, no prose, no filler.

## Working Method

- At the start of each conversation, run `git status` silently. If Git is not initialized or no remote is configured, warn the user before proceeding.
- If unsure or low confidence: ask or research first — don't start responding.
- Tasks spanning >1 file or >3 steps: create and show a plan first.
- Responses: short, precise. No emojis, introductions, confirmations, repetition. Code/plans: always complete.
- Sub-agents: instruct to respond terse — no prose, no filler, bullets only.
- If an assumption seems wrong: say so briefly before continuing.
- If in Plan mode and file edits needed: do not write changes inline in chat. Offer: (1) press "Start implementation" to switch to Agent mode, or (2) apply changes manually. Only if user chooses (2): provide changes as text with placement instructions.

After every `git commit` and `git push`, show GitHub Pages URL as clickable link, e.g.:

**[https://mma-bntx.github.io](https://mma-bntx.github.io)**

## Commit & Push

- Ask to commit/push after changes. Perform commit/push if user requests it.
- Commit messages: Danish, describe latest changes.
- Before the first commit, run `git config user.email` and `git config user.name`. If email is empty or does not contain `noreply`, or if name is empty, read `.github/prompts/git-identity.prompt.md` and follow the steps there.

## Security

- Scan staged files for emails, API keys, passwords before commit. If found: stop and warn.
- No real personal data (names, emails, CPR) in prototypes — use fictitious test data.
- No real emails in code — `mailto:`, form recipients, Power Automate targets. Use `test@example.com` or a placeholder.

## Project Structure

- `index.html` must always be in the root folder (GitHub Pages requirement).
- Static files go in: `assets/css/`, `assets/js/`, `assets/img/`.
- Phase 1: plain HTML/CSS/JS. No build steps. CDN via `<script>` tags allowed — use where it simplifies.
- Proactively suggest CDN libraries (e.g. Alpine.js, Chart.js, Sortable.js). Always CDN — never npm.
- Phase 2 (Azure SWA): configuration to be agreed separately — follow consultant guidance.
- For questions about Bentax' IT systems, integrations, or API access: read `.github/prompts/bentax-stack.prompt.md`.
- If the user wants to add new skills, agents, instructions, or other Copilot resources: read `.github/prompts/extend-toolkit.prompt.md` and follow the steps there.

---

## Design — Bentax

Default: Bentax visual identity. Follow user if they explore alternatives.

- **Primary:** `#103B3D` (dark teal) — navbar, footer, buttons
- **Accent:** `#D56729` (orange) — CTA buttons, highlights
- **Secondary:** `#D5CEC4` (warm beige) — backgrounds
- **Text:** `#333333` — body text on light backgrounds
- **Font:** `Roboto` (body/headings), `Andada Pro` (display)
- **Logo:** `<img src="assets/img/logo-bentax.svg" alt="Bentax logo">` — place on `#103B3D` background
- **Prototype banner:** `background: #c0392b`, white text — `"PROTOTYPE — IKKE PRODUKTION"` — keep until user explicitly asks to remove it.

### Alternative styles
If user wants to explore alternatives, suggest browsing https://github.com/VoltAgent/awesome-design-md/tree/main/design-md and ask user to reply with the name or link of a style they want. Do NOT fetch or list styles proactively. Wait for user's choice, then install it.
- **Installing a style:** Fetch `https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/{style}/DESIGN.md`, save to `.github/prompts/design.prompt.md`, then add a bullet to the Design section in `.github/copilot-instructions.md`: `- For alternative design style: read .github/prompts/design.prompt.md`.

Building HTML/CSS UI: read `.github/prompts/bentax-design.prompt.md`.

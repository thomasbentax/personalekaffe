# Bentax Prototype Template

Brug denne skabelon til at bygge interne prototyper med hjælp fra Copilot Agent.
Du behøver ikke kende til Git — Copilot klarer det for dig.

---

## Forudsætninger

Installer følgende **én gang** på din computer, inden du går i gang:

### Applikationer

| Hvad | Link | Installation kræver admin (TLF) |
|---|---|---|
| VS Code | [code.visualstudio.com](https://code.visualstudio.com) | Nej |
| Git | [git-scm.com](https://git-scm.com) | Nej |
| GitHub CLI | [cli.github.com](https://cli.github.com) | Ja |

Efter installation af GitHub CLI: åbn en terminal (åben Start-menuen, søg 'powershell' og tryk 'Enter') og kør `gh auth login` for at logge ind på din GitHub-konto.

### VS Code Extensions

Åbn VS Code → `Ctrl+Shift+X` → søg og installer:

| Extension | ID (Copy+Paste dette til søgefeltet) |
|---|---|
| GitHub Copilot | `github.copilot` |
| GitHub Copilot Chat | `github.copilot-chat` |
| Live Preview | `ms-vscode.live-server` |
| HTMLHint | `htmlhint.vscode-htmlhint` |

> GitHub Copilot kræver en aktiv Copilot-licens - som minimum 'Copilot Pro' ($10).

---

## Opret repos (browser)

1. Åbn din GitHub-side i browseren.
2. Tryk på **Repositories**-fanen.
3. Tryk **New**.
4. Indtast **Repository name**.
5. Lad **Visibility** forblive **Public** — på en gratis GitHub-konto er Public et krav for at siden kan vises som GitHub Page.
6. Ændre **Start with a template**-dropdown til **bntx-template**.
7. Tryk **Create repository**.

⏳ *Vent på at repos oprettes.*

8. Tryk på den grønne knap **\<\> Code** og kopier HTTPS-URL'en.
9. Tryk på **Settings → Pages** og under **Branch** ændres dropdown fra **None** til **main** → tryk **Save**.

---

## Clone repos til computer (VS Code)

1. Åbn et **nyt** VS Code-vindue.
2. Vælg **Clone Git Repository...**-hyperlinket på **Welcome**-siden.
3. Indsæt link til repos (`Ctrl+V`) → tryk **Enter**.
4. Vælg **repos**-mappen (hovedmappen hvor alle dine repos er samlet) → tryk **Select as Repository Destination**.

⏳ *Vent på at repos klones til din computer.*

5. Pop-up **"Would you like to open the repository?"** → vælg **Open**.

*VS Code-vinduet er nu klar og Agent har adgang til mappen.*

---

## Genveje

| Handling | Genvej |
|---|---|
| Vis/skjul Explorer (mappens indhold) | `Ctrl+Shift+E` |
| Vis/skjul Agent-chatten | `Ctrl+Alt+I` |
| Vis/skjul Terminal | `Ctrl+Æ` |

---

## Regler for prototyper

- Alle prototyper **bør** have en rød prototype-banner øverst: **"PROTOTYPE — IKKE PRODUKTION"**
- Brug aldrig rigtige kundedata eller personoplysninger som testdata
- Prototyper publiceres automatisk på GitHub Pages når du committer

## Design

Copilot følger Bentax' visuelle identitet som udgangspunkt.
Farver, fonte og komponenter er beskrevet i `.github/prompts/bentax-design.prompt.md`.

---

## Administration

### Aktivér GitHub Pages
Gå til **Settings → Pages** i repo'et.
Under *Branch*: vælg **main**, mappen **(root)** → klik **Save**.
Prototypen er herefter tilgængelig på `https://mma-bntx.github.io/<repo-navn>/`

### Deaktivér GitHub Pages
Gå til **Settings → Pages** i repo'et.
Under *Branch*: vælg **None** → klik **Save**.
Siden er ikke længere tilgængelig — repo'et og koden forbliver intakte.

### Slet repository
> ⚠️ Dette er **permanent** og **kan ikke fortrydes**. Al kode, historik og GitHub Pages-siden slettes.

Gå til **Settings** i repo'et → scroll helt ned til *Danger Zone*.
Klik **Delete this repository** → skriv repo-navnet for at bekræfte → klik **I want to delete this repository**.

> ⚠️ Dette er **permanent** og **kan ikke fortrydes**. Al kode, historik og GitHub Pages-siden slettes.

---

## Support

Kontakt Digitalisering (MMA) hvis du har spørgsmål.

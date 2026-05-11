---
agent: agent
description: Configure git user identity using GitHub CLI before the first commit.
---

# Git Identity Setup

Run in order. Stop on failure and inform user.
Trigger: `git config user.email` empty or missing `noreply`.

1. Get email and name via PowerShell:
   ```powershell
   $u = gh api user | ConvertFrom-Json
   git config user.email "$($u.id)+$($u.login)@users.noreply.github.com"
   git config user.name $u.name
   ```

   If PowerShell is unavailable, use jq:
   ```
   gh api user --jq '"\(.id)+\(.login)@users.noreply.github.com"'
   git config user.email "<result>"
   gh api user --jq '.name // .login'
   git config user.name "<result>"
   ```

2. Verify: `git config user.email && git config user.name`

# banking-automation

## Banking login test

The first Playwright test logs in to the ParaBank demo site using its public demo
account (`john` / `demo`) and verifies that the Accounts Overview page is shown.

Run the test in Chromium:

```powershell
npm test -- --project=chromium
```

Override the demo URL or credentials in PowerShell when needed:

```powershell
$env:BANKING_BASE_URL = "https://parabank.parasoft.com/parabank/"
$env:BANKING_USERNAME = "john"
$env:BANKING_PASSWORD = "demo"
npm test -- --project=chromium
```

Do not use real banking credentials with this demo test.
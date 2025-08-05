# PowerShell script for Windows development
Write-Host "Starting NaijaMart Fresh development server..." -ForegroundColor Green
$env:NODE_ENV = "development"
npx tsx server/index.ts
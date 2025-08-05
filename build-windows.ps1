# PowerShell script for Windows build and start
Write-Host "Building NaijaMart Fresh..." -ForegroundColor Green
npx vite build
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
Write-Host "Starting production server..." -ForegroundColor Green
$env:NODE_ENV = "production"
node dist/index.js
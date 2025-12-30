@echo off
echo ===================================================
echo   CaravanMatch One-Click Deployer
echo ===================================================
echo.
echo This script will deploy the current folder to Vercel (Production).
echo.

call npx.cmd vercel --prod --force

echo.
echo ===================================================
echo   Deployment Complete! (Check for errors above)
echo ===================================================
pause

@echo off
REM Copies rmb_template-related files into C:\Users\infos\Downloads\rmb_template_moved
SET "DEST=C:\Users\infos\Downloads\rmb_template_moved"
IF NOT EXIST "%DEST%" (
  mkdir "%DEST%"
)
echo Copying rmb_template folder...
xcopy /E /I /Y "rmb_template" "%DEST%\rmb_template\"
echo Copying root and served_*.html files...
for %%f in (root.html served_*.html) do (
  if exist "%%f" xcopy /Y "%%f" "%DEST%\" >nul
)
echo Done. Files copied to %DEST%
pause


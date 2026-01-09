$dest = 'C:\Users\infos\Downloads\rmb_template_moved'
if (!(Test-Path $dest)) {
  New-Item -ItemType Directory -Path $dest -Force | Out-Null
}
Write-Host "Copying rmb_template folder to $dest\r\n"
Copy-Item -Recurse -Force -Path ".\rmb_template" -Destination (Join-Path $dest 'rmb_template')
Write-Host "Copying served_*.html and root.html to $dest"
Get-ChildItem -Path . -Filter 'served_*.html' -File | ForEach-Object { Copy-Item -Force $_.FullName -Destination $dest }
if (Test-Path .\root.html) { Copy-Item -Force .\root.html -Destination $dest }
Write-Host "Copy complete."


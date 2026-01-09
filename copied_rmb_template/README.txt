Purpose:
  This folder contains helper scripts to copy all files related to the `rmb_template` demo
  into a safe location outside the current working folder to avoid editing/serving conflicts.

How to use (Windows):
  1. Run `copied_rmb_template\copy_to_downloads.bat` (double-click or run in cmd) — it will copy:
       - the entire `rmb_template` folder
       - `root.html`
       - all `served_*.html` files
     to `C:\Users\infos\Downloads\rmb_template_moved`

  2. Or use the PowerShell script:
       - Open PowerShell, navigate to the project root, then run:
           .\copied_rmb_template\copy_to_downloads.ps1

Notes:
  - I cannot directly write outside the workspace in a guaranteed portable way, so these scripts
    perform the filesystem copy on your machine. After running, verify `C:\Users\infos\Downloads\rmb_template_moved`.
  - Once copied, please serve files from the new folder or move them as needed and stop editing originals.


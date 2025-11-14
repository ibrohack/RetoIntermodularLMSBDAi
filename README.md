Quick resume
- Purpose: Course intermodular challenge for LMSi and BDAi.
- Main content: Static website (index.html and related assets) and diagram files from the database design.
- Tech stack: Pure HTML with CSS/JS/JSON assets; no build tools or server required.
- Size & complexity: Small, client-side only, meant to be opened directly in a browser.

Repository structure (high level)
- css/ the website css files.
- db/ this folder contains all the files containing the information stored from database in JSON format.
- diagrams/ diagrams and documents related to the database design.
- html/ the website html files; except the Index.html that is in the root location of the repository.
- images/ the website assets files.
- js/ the website JavaScript files, required to load the content from the JSON files into the HTML.

How to download the repository
- Using Git (recommended):
- Open a terminal and run:
git clone https://github.com/ibrohack/RetoIntermodularLMSBDAi.git
- Or download ZIP from GitHub:
- Visit the repository page and click "Code" → "Download ZIP", then extract the archive.

How to open index.html locally
Option A — Open directly in your browser (quickest)
- Navigate into the cloned or extracted folder, then open:
- Index.html
- Double-click the file or right-click → Open with → choose your browser (Chrome, Edge, Firefox).
Option B — Serve with a simple local HTTP server (recommended if some features require same-origin)
- Using Python 3 (run from the folder that contains “Index.html”):
cd RetoIntermodularLMSBDAi/
python -m http.server 8000
- Then open http://localhost:8000 in your browser.

Notes and tips
- No installation or dependencies required for basic viewing.
- If assets (images, fonts, scripts) fail to load when opening via file://, use the local server method above.
- There is no license file in the repository; check with the author before reusing or redistributing content.

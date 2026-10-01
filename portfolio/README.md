# Jadam Sirisha Portfolio (React + Vite)
Run: `npm install` then `npm run dev`. Build: `npm run build`.
Admin login: admin / admin123 (edit in src/config.js).

## Google Sheets DB
1. New Google Sheet, row 1 headers: timestamp, name, email, message.
2. Extensions > Apps Script, paste apps-script/Code.gs.
3. Deploy > New deployment > Web app > Execute as Me, Access Anyone. Copy URL.
4. Paste URL into SHEETS_URL in src/config.js. (Empty = localStorage only.)

## GitHub Pages
1. Create a repo, push this project.
2. `npm run deploy` (publishes dist to gh-pages branch).
3. Repo Settings > Pages > Source: gh-pages branch.

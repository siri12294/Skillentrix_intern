// Google Sheets as DB. Sheet header row: timestamp | name | email | message
// Deploy > New deployment > Web app > Execute as: Me, Access: Anyone
function doPost(e) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const d = JSON.parse(e.postData.contents);
  sh.appendRow([d.timestamp, d.name, d.email, d.message]);
  return ContentService.createTextOutput('ok');
}
function doGet() {
  const rows = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getDataRange().getValues();
  const [h, ...r] = rows;
  const out = r.map(x => Object.fromEntries(h.map((k, i) => [k, x[i]])));
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}

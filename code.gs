function doGet(e) {
  var page = e.parameter.page || 'index';
  return HtmlService.createHtmlOutputFromFile(page)
    .setTitle('Songwünsche Unterstufendisko')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function doPost(e) {
  var sheet = SpreadsheetApp.openById("GOOGLE SHEET ID MUST BE ENTERED HERE").getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(), 
    data.song, 
    data.artist, 
    data.grade // Wir nutzen 'grade' statt 'class'
  ]);
  
  return ContentService.createTextOutput("Success")
    .setMimeType(ContentService.MimeType.TEXT);
}

function getAdminData() {
  var sheet = SpreadsheetApp.openById("GOOGLE SHEET ID MUST BE ENTERED HERE").getActiveSheet();
  var rows = sheet.getDataRange().getValues();
  if (rows.length <= 1) return { top10: [], entries: [] };

  rows.shift();

  var counts = {};
  rows.forEach(function(r) {
    var key = r[1] + " (" + r[2] + ")";
    counts[key] = (counts[key] || 0) + 1;
  });

  var top10 = Object.keys(counts)
    .map(function(key) { return { name: key, count: counts[key] }; })
    .sort(function(a, b) { return b.count - a.count; })
    .slice(0, 10);

  var allEntries = rows.map(function(r, index) {
    return {
      rowNum: index + 2,
      song: r[1],
      artist: r[2],
      grade: r[3]
    };
  });

  return { top10: top10, entries: allEntries.reverse() };
}

// Liefert die HTML-Seiten aus
function doGet(e) {
  var page = e.parameter.page || 'index';
  return HtmlService.createHtmlOutputFromFile(page)
    .setTitle('Songwünsche Unterstufendisko')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// Speichert neue Songwünsche (POST-Anfrage vom Formular)
function doPost(e) {
  var sheet = SpreadsheetApp.openById("GOOGLE SHEET ID MUST BE ENTERED HERE").getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(), 
    data.song, 
    data.artist, 
    data.grade // Wir nutzen 'grade' statt 'class'
  ]);
  
  return ContentService.createTextOutput("Success")
    .setMimeType(ContentService.MimeType.TEXT);
}

// Holt Daten für die Admin-Seite (Top 10 und Liste)
function getAdminData() {
  var sheet = SpreadsheetApp.openById("GOOGLE SHEET ID MUST BE ENTERED HERE").getActiveSheet();
  var rows = sheet.getDataRange().getValues();
  if (rows.length <= 1) return { top10: [], entries: [] };

  rows.shift(); // Header entfernen

  var counts = {};
  rows.forEach(function(r) {
    var key = r[1] + " (" + r[2] + ")"; // Songname (Interpret)
    counts[key] = (counts[key] || 0) + 1;
  });

  var top10 = Object.keys(counts)
    .map(function(key) { return { name: key, count: counts[key] }; })
    .sort(function(a, b) { return b.count - a.count; })
    .slice(0, 10);

  var allEntries = rows.map(function(r, index) {
    return {
      rowNum: index + 2,
      song: r[1],
      artist: r[2],
      grade: r[3]
    };
  });

  return { top10: top10, entries: allEntries.reverse() };
}

// Löschfunktion für den Admin
function deleteEntry(rowNum) {
  var sheet = SpreadsheetApp.openById("GOOGLE SHEET ID MUST BE ENTERED HERE").getActiveSheet();
  sheet.deleteRow(rowNum);
  return "Erfolgreich gelöscht";
}
function deleteEntry(rowNum) {
  var sheet = SpreadsheetApp.openById("GOOGLE SHEET ID MUST BE ENTERED HERE").getActiveSheet();
  sheet.deleteRow(rowNum);
  return "Erfolgreich gelöscht";
}

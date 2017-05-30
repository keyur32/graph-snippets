var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://graph.microsoft.com/%7Bver%7D/drive/root/workbook/worksheets/%7Bid%7D/pivotTables/%7Bid%7D");

xhr.send(data);

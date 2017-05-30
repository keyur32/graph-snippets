var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://graph.microsoft.com/v1.0/me/drive/items/%7Bid%7D/workbook/worksheets(%3Cid%7Cname%3E)/Cell(row=%3Crow%3E,column=%3Ccolumn%3E)");

xhr.send(data);

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://graph.microsoft.com/v1.0/me/drive/items/%7Bid%7D/workbook/worksheets");

xhr.send(data);

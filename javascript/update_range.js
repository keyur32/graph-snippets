var data = "{ }";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("PATCH", "https://graph.microsoft.com/v1.0/me/drive/items/%7Bid%7D/workbook/worksheets(%27sheet1%27)/range(address=%27A1:B2%27)");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);

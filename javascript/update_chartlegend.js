var data = "{ }";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("PATCH", "https://graph.microsoft.com/v1.0/me/drive/items/%7Bid%7D/workbook/worksheets(%3Cid%7Cname%3E)/charts(%3Cname%3E)/legend");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);

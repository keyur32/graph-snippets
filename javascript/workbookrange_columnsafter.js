var data = "{ }";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://graph.microsoft.com/%7Bver%7D/drive/root/workbook/worksheets/%7Bid%7D/range/columnsAfter(count=2)");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);

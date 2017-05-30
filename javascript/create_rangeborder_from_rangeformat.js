var data = "{ }";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://graph.microsoft.com/v1.0/me/drive/items/%7Bid%7D/workbook/names(%3Cname%3E)/range/format/borders");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);

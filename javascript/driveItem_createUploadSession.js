var data = "{ }";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://graph.microsoft.com/v1.0/me/drive/root:/%7Bitem-path%7D:/createUploadSession");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);

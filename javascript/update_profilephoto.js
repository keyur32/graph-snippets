var data = "{ }";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("PUT", "https://graph.microsoft.com/v1.0/me/photo/$value");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);

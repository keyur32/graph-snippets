var data = "{ }";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("PATCH", "https://graph.microsoft.com/v1.0/users/%7Bid%7CuserPrincipalName%7D/photo");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);

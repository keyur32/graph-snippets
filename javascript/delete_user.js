var data = "{ }";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("DELETE", "https://graph.microsoft.com/v1.0/users/mba9a3254-9f18-4209-aeb3-9e42a35b5be4");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);

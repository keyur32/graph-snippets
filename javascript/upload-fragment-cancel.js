var data = "{ }";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("DELETE", "https://tenant-my.sharepoint.com/alkjl1kjklna");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);

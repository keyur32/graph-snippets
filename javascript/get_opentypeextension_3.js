var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://graph.microsoft.com/v1.0/me/messages(%27AAMkAGE1M2IyNGNmLTI5MTktNDUyZi1iOTVl===%27)?%24expand=extensions(%24filter%3Did%20eq%20'Microsoft.OutlookServices.OpenTypeExtension.Com.Contoso.Referral')");

xhr.send(data);

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://graph.microsoft.com/v1.0/groups(%2737df2ff0-0de0-4c33-8aee-75289364aef6%27)/threads(%27AAQkADJizZJpEWwqDHsEpV_KA==%27)/posts(%27AAMkADJiUg96QZUkA-ICwMubAADDEd7UAAA=%27)/extensions(%27Microsoft.OutlookServices.OpenTypeExtension.Com.Contoso.Estimate%27)");

xhr.send(data);

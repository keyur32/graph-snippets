import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

conn.request("GET", "/v1.0/me/messages(%27AAMkAGE1M2IyNGNmLTI5MTktNDUyZi1iOTVl===%27)?%24expand=extensions(%24filter%3Did%20eq%20'Microsoft.OutlookServices.OpenTypeExtension.Com.Contoso.Referral')")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

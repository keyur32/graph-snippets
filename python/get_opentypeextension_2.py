import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

conn.request("GET", "/v1.0/groups(%27f5480dfd-7d77-4d0b-ba2e-3391953cc74a%27)/events(%27AAMkADVl17IsAAA=%27)/extensions(%27Com.Contoso.Deal%27)")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

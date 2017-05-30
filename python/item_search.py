import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

conn.request("GET", "/v1.0/me/drive/root/search(q=%27%7Bsearch-query%7D%27)")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

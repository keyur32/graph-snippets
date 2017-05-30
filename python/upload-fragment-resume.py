import http.client

conn = http.client.HTTPSConnection("tenant-my.sharepoint.com")

conn.request("GET", "/alkjl1kjklna")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

import http.client

conn = http.client.HTTPSConnection("tenant-my.sharepoint.com")

payload = "{ }"

headers = { 'content-type': "application/json" }

conn.request("PUT", "/alkjl1kjklna", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

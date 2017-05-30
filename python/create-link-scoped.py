import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

payload = "{ }"

headers = { 'content-type': "application/json" }

conn.request("POST", "/v1.0/me/drive/items/%7Bitem-id%7D/createLink", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

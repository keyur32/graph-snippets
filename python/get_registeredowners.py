import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

conn.request("GET", "/v1.0/devices/%7Bid%7D/registeredOwners")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

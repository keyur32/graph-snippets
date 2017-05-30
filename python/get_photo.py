import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

conn.request("GET", "/v1.0/users/%7Bid%7CuserPrincipalName%7D/photo")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

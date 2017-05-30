import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

conn.request("GET", "/v1.0/groups/%7Bid%7D/conversations/%7Bid%7D")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

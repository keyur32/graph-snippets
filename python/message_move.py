import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

payload = "{ }"

headers = { 'content-type': "application/json" }

conn.request("POST", "/v1.0/me/messages/%7Bid%7D/move", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

payload = "{ }"

headers = { 'content-type': "application/json" }

conn.request("POST", "/v1.0/devices/%7Bid%7D/registeredUsers", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

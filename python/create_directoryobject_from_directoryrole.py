import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

payload = "{ }"

headers = { 'content-type': "application/json" }

conn.request("POST", "/v1.0/directoryRoles/%7Bid%7D/members", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

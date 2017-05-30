import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

payload = "{ }"

headers = { 'content-type': "application/json" }

conn.request("PUT", "/v1.0/users/%7Bid%7D/manager/$ref", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

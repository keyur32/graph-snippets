import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

payload = "{ }"

headers = { 'content-type': "application/json" }

conn.request("POST", "/v1.0/groups/%7Bid%7D/threads", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

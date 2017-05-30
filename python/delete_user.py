import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

payload = "{ }"

headers = { 'content-type': "application/json" }

conn.request("DELETE", "/v1.0/users/mba9a3254-9f18-4209-aeb3-9e42a35b5be4", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

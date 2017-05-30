import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

payload = "{ }"

headers = { 'content-type': "application/json" }

conn.request("DELETE", "/v1.0/me/calendar", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

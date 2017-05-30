import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

payload = "{ }"

headers = { 'content-type': "application/json" }

conn.request("POST", "/v1.0/me/findMeetingTimes", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

conn.request("GET", "/v1.0/me/reminderView?endDateTime=endDateTime-value&startDateTime=startDateTime-value")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

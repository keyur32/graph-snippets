import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

conn.request("GET", "/v1.0/me/calendarView?endDateTime=2016-10-01T19%3A00%3A00.0000000&startDateTime=2016-01-01T19%3A00%3A00.0000000")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

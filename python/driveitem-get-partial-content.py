import http.client

conn = http.client.HTTPSConnection("b0mpua-by3301.files.1drv.com")

conn.request("GET", "/y23vmag")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

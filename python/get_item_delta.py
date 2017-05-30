import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

conn.request("GET", "/v1.0/me/drive/root/delta(token=%27123123901209310923!23alksjd%27)")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

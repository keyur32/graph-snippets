import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

conn.request("GET", "/v1.0/me/drive/items/%7Bid%7D/workbook/worksheets(%3Cid%7Cname%3E)/charts(%3Cname%3E)/series(%3Cundefined%3E)/points")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

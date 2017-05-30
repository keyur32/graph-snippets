import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

conn.request("GET", "/v1.0/me/drive/items/%7Bid%7D/workbook/worksheets(%3Cid%7Cname%3E)/Cell(row=%3Crow%3E,column=%3Ccolumn%3E)")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

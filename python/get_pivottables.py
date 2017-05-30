import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

conn.request("GET", "/%7Bver%7D/drive/root/workbook/worksheets/%7Bid%7D/pivotTables")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

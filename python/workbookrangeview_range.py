import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

conn.request("GET", "/%7Bver%7D/drive/root/workbook/worksheets/%7Bid%7D/range(addres=%27A1:Z10%27)/visibleView/range")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

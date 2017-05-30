import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

payload = "{ }"

headers = { 'content-type': "application/json" }

conn.request("PATCH", "/v1.0/me/drive/items/%7Bid%7D/workbook/worksheets(%27sheet1%27)/range(address=%27A1:B2%27)", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

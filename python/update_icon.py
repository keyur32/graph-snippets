import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

payload = "{ }"

headers = { 'content-type': "application/json" }

conn.request("PATCH", "/v1.0/me/drive/items/%7Bid%7D/workbook/tables(%3Cid%7Cname%3E)/sort/fields/icon", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

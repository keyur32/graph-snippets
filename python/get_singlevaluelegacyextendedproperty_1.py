import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

conn.request("GET", "/v1.0/me/messages(%27AAMkAGE1M2_bs88AACHsLqWAAA=%27)?%24expand=singleValueExtendedProperties(%24filter%3Did%20eq%20'String%20%7B66f5a359-4659-4830-9070-00047ec6ac6e%7D%20Name%20Color')")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

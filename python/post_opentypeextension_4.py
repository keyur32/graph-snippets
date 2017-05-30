import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

payload = "{ }"

headers = { 'content-type': "application/json" }

conn.request("POST", "/v1.0/groups(%2737df2ff0-0de0-4c33-8aee-75289364aef6%27)/threads(%27AAQkADJizZJpEWwqDHsEpV_KA==%27)/posts(%27AAMkADJiUg96QZUkA-ICwMubAAC1heiSAAA=%27)/microsoft.graph.reply", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

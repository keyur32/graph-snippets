import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

conn.request("GET", "/v1.0/me/messages?%24expand=Extensions(%24filter%3Did%20eq%20'Com.Contoso.Referral')&%24filter=Extensions%2Fany(f%3Af%2Fid%20eq%20'Com.Contoso.Referral')")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

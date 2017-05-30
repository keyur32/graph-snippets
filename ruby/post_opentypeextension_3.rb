require 'uri'
require 'net/http'

url = URI("https://graph.microsoft.com/v1.0/groups(%27f5480dfd-7d77-4d0b-ba2e-3391953cc74a%27)/events(%27AAMkADVl17IsAAA=%27)/extensions")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request.body = "{ }"

response = http.request(request)
puts response.read_body

require 'uri'
require 'net/http'

url = URI("https://graph.microsoft.com/v1.0/groups/%7Bid%7D/conversations/%7Bid%7D/threads")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body

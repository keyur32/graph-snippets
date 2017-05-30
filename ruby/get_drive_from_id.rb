require 'uri'
require 'net/http'

url = URI("https://graph.microsoft.com/v1.0/drives/%7Bdrive-id%7D")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body

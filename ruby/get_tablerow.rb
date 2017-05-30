require 'uri'
require 'net/http'

url = URI("https://graph.microsoft.com/v1.0/me/drive/items/%7Bid%7D/workbook/tables(%3Cid%7Cname%3E)/rows(%3Cindex%3E)")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body

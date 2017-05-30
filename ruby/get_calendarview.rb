require 'uri'
require 'net/http'

url = URI("https://graph.microsoft.com/v1.0/me/calendarView?endDateTime=2016-10-01T19%3A00%3A00.0000000&startDateTime=2016-01-01T19%3A00%3A00.0000000")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body

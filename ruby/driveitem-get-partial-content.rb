require 'uri'
require 'net/http'

url = URI("https://b0mpua-by3301.files.1drv.com/y23vmag")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body

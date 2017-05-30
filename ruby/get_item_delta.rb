require 'uri'
require 'net/http'

url = URI("https://graph.microsoft.com/v1.0/me/drive/root/delta(token=%27123123901209310923!23alksjd%27)")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body

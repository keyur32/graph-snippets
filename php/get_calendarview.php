<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://graph.microsoft.com/v1.0/me/calendarView?endDateTime=2016-10-01T19%3A00%3A00.0000000&startDateTime=2016-01-01T19%3A00%3A00.0000000",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}

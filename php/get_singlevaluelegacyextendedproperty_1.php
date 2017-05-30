<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://graph.microsoft.com/v1.0/me/messages(%27AAMkAGE1M2_bs88AACHsLqWAAA=%27)?%24expand=singleValueExtendedProperties(%24filter%3Did%20eq%20'String%20%7B66f5a359-4659-4830-9070-00047ec6ac6e%7D%20Name%20Color')",
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

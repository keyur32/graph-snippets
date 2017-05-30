<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://graph.microsoft.com/%7Bver%7D/drive/root/workbook/worksheets/%7Bid%7D/range(addres=%27A1:Z10%27)/visibleView",
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

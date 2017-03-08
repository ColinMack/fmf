<!DOCTYPE html>
<html>
<body>
  
 <?
  
// PHP Data Objects(PDO) Sample Code:
/*try {
  $conn = new PDO("sqlsrv:server = tcp:fundmyfuture.database.windows.net,1433; Database = FundMyFuture", "fmf", "blk2017!");
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
  print("Error connecting to SQL Server.");
die(print_r($e));
}*/
// SQL Server Extension Sample Code:
$connectionInfo = array("UID" => "fmf@fundmyfuture", "pwd" => "blk2017!", "Database" => "FundMyFuture", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
$serverName = "tcp:fundmyfuture.database.windows.net,1433";
$conn = sqlsrv_connect($serverName, $connectionInfo);

  if( $conn ) {
     echo "Connection established.<br />";
}else{
     echo "Connection could not be established.<br />";
     die( print_r( sqlsrv_errors(), true));
}
  
  ?>

</body>
</html>

<?php


session_start();
require '../model/classes/User.class.php';

$x = 2;

try {
  $usr = unserialize($_SESSION['user']);
  $usr->set_log(false);

  $_SESSION['id'] = NULL;
  $_SESSION['pseudo'] = NULL;
  $_SESSION['mail'] = NULL;
  $_SESSION['user'] = NULL;
  $x = 1;
  session_destroy();


} catch (\Exception $e) {
  $x = 0;

}

if ($x == 1){
      echo '{
        "result" : "Success",
        "message" : "You been disconnect with success !"
      }';
    }
else {
  echo '{
    "result" : "Failure",
    "message" : "A problem occur when we trying to disconnect you !"
  }';

}



/*
{
  "result" : "Success" or "Failure",
  "message" : "This is a message I want the user to see",
}
*/
?>

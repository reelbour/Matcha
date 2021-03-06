<?php
session_start();
require $_SERVER["DOCUMENT_ROOT"] . '/model/classes/User.class.php';
require $_SERVER["DOCUMENT_ROOT"] . '/model/functions/hash_password.php';
require_once $_SERVER["DOCUMENT_ROOT"] . '/config/database.php';
$db = new Database($dsn . ";dbname=" . $dbname, $username, $password);

try 
{
	$usr = User::receive_account_retrieval($_POST['a'], $_GET['b'], $db);
} 
catch (Exception $e) 
{
  echo '{
    "result" : "Failure",
    "message" : "'.$e->getMessage().'"
  }';
}

if ($_POST['newpw'] != '' && $_POST['confirmpw'] != '' && $_POST['newpw'] == $_POST['confirmpw'])
{
  try 
  {
    $check = $usr->is_valid_password($_POST['newpw']);
    if ($check == true)
    {
      $usr->set_password(hash_password($_POST['newpw']));
      echo 
      '{
      "result" : "Succes",
      "message" : "Votre mot de passe à été modifié avec succès !"
      }';
    }
    else
    {
      echo 
      '{
      "result" : "Failure",
      "message" : "Votre mot de passe n est pas valide !"
      }';
    }
  }
  catch (Exception $e) 
  {
    echo 
    '{
      "result" : "Failure",
      "message" : "'.$e->getMessage().'"
    }';
  }
}

<?php

session_start();
require $_SERVER["DOCUMENT_ROOT"] . '/model/classes/User.class.php';
require_once $_SERVER["DOCUMENT_ROOT"] . '/config/database.php';

$db = new Database($dsn . ";dbname=" . $dbname, $username, $password);

if (empty($_POST['email']))
{
  echo
  '{
    "result": "Failure",
    "message": "Vous devez remplir tous les champs!",
    "alert": 
    {
      "color": "DarkRed",
      "message": "Vous devez remplir tous les champs!"
    }
  }';
  return;
}
else 
{
  try 
  {
    User::send_account_retrieval($_POST['email'], $db, "http://localhost:8080/retreive");

    echo  
    '{
      "result": "Success",
      "message": "Vous aller recevoir un mail de reinitilisation de mdp rapidement!",
      "alert": 
      {
        "color": "DarkGreen",
        "message": "Vous aller recevoir un mail de reinitilisation de mdp rapidement!!"
      }
    }';
  }
  catch (Exception $e) 
  {
    echo 
    '{
      "result" : "Failure",
      "message" : "'.$e->getMessage().'"
    }';
    return;
	}
}
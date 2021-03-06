<?php
session_start();
require $_SERVER["DOCUMENT_ROOT"] . '/model/classes/User.class.php';
$usr = (unserialize($_SESSION['user']));

$path = $usr->get_picture_profil($usr->get_id());

if ($path['path'] == '/Pictures/def.jpg')
  $canlike = 0;
else if ($path['path'] == '/Pictures/addpic.png')
  $canlike = 0;
else
  $canlike = 1;

if ($usr->is_valid_id($_POST['id']) == 0)
{
  echo 
  '{
    "data" : {},
    "alert" : {
      "color" : "DarkRed",
      "message" : "The id requested doesnt exist"
    }
  }';
  return;
}
else 
{
 if ($usr->is_id_exist($_POST['id']) == 0)
 {
    echo 
    '{
      "data" : 
      {},
      "alert" : 
      {
        "color" : "DarkRed",
        "message" : "the id doesnt exist!"
      }
    }';
     return;
 }

 if ($canlike == 0)
 {
    echo 
    '{
        "data" : 
        {
        },
        "alert" : 
        {
          "color" : "DarkRed",
          "message" : "Upload a picture for like an user !"
        }
      }';
    return;
 }

  $ret = $usr->set_a_like($_POST['id']);
  $array_like = $usr->get_if_a_user_like_user_connected($_POST['id']);

  //si like en retour supprimer le chat + notif unmatch
  // supprimer le chat si il y en avais un
  if ($ret == 1)
  {
    $usr->set_a_notif_for_like($_POST['id'], ' unliked u  :( )!');
    $usr->substract_popularity_of_this_user($_POST['id']);
    
    if ($array_like['liked'] == 0)
    {
      //notif pour unmatch
      $usr->delete_conv_between_user($_POST['id']);
      $usr->set_a_notif_for_unmatch($_POST['id']);
    }
    echo '{
    "data" : {
      "id" : '.$_POST['id'].',
      "newLikeStatus" : false
    },
    "alert" : {
      "color" : "DarkBlue",
      "message" : "Like preference updated, u now unlike this user!"
    }
    }';
    return;
  }

  if ($ret == 2)
  {
    $usr->set_a_notif_for_like($_POST['id'], ' liked u again :p !');
    // verifie si like en retour, si oui notif pour rematch + creation chat
    $usr->add_popularity_of_this_user($_POST['id']);
    if ($array_like['liked'] == 1)
    {
      $usr->set_a_notif_for_match($_POST['id']);
      $usr->set_a_conversation($_POST['id']);
    }
    //recrée un chat
    echo 
    '{
      "data" : 
      {
        "id" : '.$_POST['id'].',
        "newLikeStatus" : true
      },
      "alert" : 
      {
        "color" : "DarkBlue",
        "message" : "Like preference updated, u now like this user!"
      }
    }';
    return;
  }
  if ($ret == 3)
  {
    $usr->set_a_notif_for_like($_POST['id'], ' liked u !');
    $usr->add_popularity_of_this_user($_POST['id']);
    if ($array_like['liked'] == 1)
    {
      $usr->set_a_notif_for_match($_POST['id']);
      $usr->set_a_conversation($_POST['id']);
    }
    //verifier si like en retour si oui notif pour match + creation du chat
    echo '{
    "data" : {
      "id" : '.$_POST['id'].',
      "newLikeStatus" : true
    },
    "alert" : {
      "color" : "DarkBlue",
      "message" : "U liked an User !"
    }
    }';
    return;
  }
}

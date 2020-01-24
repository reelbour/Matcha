<?php
ob_start();
var_dump($_POST);
$result = ob_get_clean();
error_log("[POST] feed_open.php: " . $result);


echo '{
  "data" : {
    "filtersEdgeValues" : {
      "ageMin" : 16,
      "ageMax" : 120,
      "distanceMax" : 100,
      "popularityMin" : 0,
      "popularityMax" : 100
    },
    "pageContent" : {
      "pageAmount" : 5,
      "elemAmount" : 18,
      "users" : [
        {
          "id" : 2,
          "pseudo" : "John",
          "picture" : "/data/doe.png",
          "tags" : ["geek", "foot"],
          "liked" : false
        },
        {
          "id" : 2,
          "pseudo" : "Lise",
          "picture" : "/data/liypick.png",
          "tags" : ["boty", "makup"],
          "liked" : false
        },
        {
          "id" : 2,
          "pseudo" : "Marcel",
          "picture" : "/data/marcel.png",
          "tags" : ["tatoo", "beer"],
          "liked" : false
        },
        {
          "id" : 2,
          "pseudo" : "clara",
          "picture" : "/data/gotaga.png",
          "tags" : ["geek", "fun"],
          "liked" : true
        }
      ]
    }
  },
  "alert" : {
    "color" : "DarkBlue",
    "message" : "feed open call"
  }
}';
//
/*
{
  -- mamybe "data" : {
    "filtersEdgeValues" : {
      "ageMin" : 12,
      "ageMax" : 12,
      "distanceMax" : 12,
      "popularityMin" : 12,
      "popularityMax" : 12
    },
    "pageContent" : {
      "pageAmount" : 12,
      "elemAmount" : 12,
      "users" : [ // NB: only fully completed users accounts
        {
          "id" : 12,
          "pseudo" : "myPseudo",
          "picture" : "/data/name.png",
          "tags" : ["#tag", ...],
          "liked" : true or false
        },
        ...
      ]
    }
  },
  -- mamybe "alert" : {
    "color" : "DarkRed",
    "message" : "message for the user"
  }
}
*/

//ni: form not working for some reason
?>

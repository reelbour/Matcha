<?php
echo '{
  "data" : {
    "id" : 12,
    "pseudo" : "hisPseudo",
    "first_name" : "John",
    "last_name" : "Doe",
    "gender" : "Woman",
    "orientation" : "Homosexual",
    "biography" : "hohoho",
    "birth" : "11-11-2011",
    "last_log" : "Now",
    "pictures" : ["/data/name.png", "/data/pic2.png"],
    "popularity_score" : 0,
    "tags" : ["joy", "stuff"],
    "liked" : "False"
  },
  "alert" : {
    "color" : "DarkBlue",
    "message" : "usr info received"
  }
}';
// id[int]
/*
{
  -- mamybe "data" : {
    "id" : 12,
    "pseudo" : "myPseudo",
    "first_name" : "John",
    "last_name" : "Doe",
    "gender" : "Man" or "Woman",
    "orientation" : "Homosexual" or "Bisexual" or "Heterosexual",
    "biography" : "blablabla",
    "birth" : "some date",
    "last_log" : "Now" or "some date",
    "pictures" : ["/data/name.png", ...],
    "popularity_score" : 12,
    "tags" : ["#tag", ...],
    "liked" : "True" or "False"
  },
  -- mamybe "alert" : {
    "color" : "DarkRed",
    "message" : "message for the user"
  }
}
*/
?>
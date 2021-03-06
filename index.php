<?php session_start(); ?>
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="UTF-8">
  <title>matcha - index</title>

  <link rel="stylesheet" href="/css/galery.css">
  <link rel="stylesheet" href="/css/multi-input.css">
  <link rel="stylesheet" href="/css/header.css">
  <link rel="stylesheet" href="/css/doubleslider.css">
  <link rel="stylesheet" href="/css/footer.css">
  <link rel="stylesheet" href="/css/chat.css">
  <script src="/index.js"></script>
  <script type='text/javascript' src='/js/PortFunnel.js'></script>
  <script type='text/javascript' src='/js/PortFunnel/Geolocation.js'></script>
</head>

<body>
  <div id="elm"></div>
  <script>

  var app = Elm.Main.init({
    node: document.getElementById('elm'),
    flags:  <?php
              if (!array_key_exists('id', $_SESSION)) {
                ?>null<?php
              }
              else {
                ?>{ pseudo: "<?=$_SESSION['pseudo']?>", picture: "<?=$_SESSION['picture']?>" }<?php
              }
            ?>
  });

  var modules = ['Geolocation'];
  PortFunnel.subscribe(app, {modules: modules});

  </script>
</div>
</html>

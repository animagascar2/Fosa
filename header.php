<!DOCTYPE html>
 <html lang="en">
<head>
    <!--
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <link rel="stylesheet" href="style.css" type="text/css">
    <link rel="stylesheet" href="bootstrap-5.0.2-dist/css/bootstrap.css">
    <link rel="stylesheet" href="fontawesome-free-6.2.1-web/css/all.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    <div class="container" id="containeur">
        <div class="row" id="row">
            <div class="col-lg-2" id="lg2">
                <img src="Fosa3/Logo.png" alt="Logo" id="logo">
            </div>
            <div class="col-lg-9" id="lg8">
                <nav class="navbar">
                    <ul class="nav navbar">
                        <li class="acceuil"><a href="index.php">Acceuil</a></li>
                        <li class="decouvrir"><a href="Decouvrir.php">Découvrir</a></li>
                        <li class="service"><a href="Services.php">Services</a></li>
                        <li class="new"><a href="News.php">News</a></li>
                        <li class="apropos"><a href="Propos.php">A propos</a></li>
                        <li><a href="Contact.php">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div class="col-lg-1" id="lg2_2">
            <img src="images/Flag_of_France.svg.png" alt="France" id="Fr" width="30px" height= "15px">
                <select name="select" id="select">
                    <option value="France"><b> Fr</b></option>
                    <option value="Allemand"><b> Gr</b></option>
                    <option value="Anglais"><b>En</b></option>
                </select>
                <i class="fa-sharp fa-solid fa-bars fa-2x" id="show"></i>
                <i class="fa-solid fa-xmark fa-2x" id="hide"></i>
            </div>
        </div>
    </div>
    <script src="header.js"></script>
</body>
</html>
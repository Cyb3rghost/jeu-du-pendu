<?php $titre = "Le Pendu"; ?>

<?php ob_start(); 

if(isset($_GET['route']))
{

    $route = $_GET['route'];

}
else
{

    $route = "";

}

switch ($route) {

    default:
        # code...
            $json = file_get_contents("data/dictionnaire.json");

            $mot = json_decode($json);
            $total = $mot->{"total"};

            $motAleatoire = $mot->{rand(0, $total)};

            require 'views/main.php';
        break;
}


$contenu = ob_get_clean();

require 'layout.php'; ?>
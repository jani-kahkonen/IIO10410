<?php
/*

   PHP-ohjelma ajax-suggest.php tarjoaa pienen etunimitietokannan. Ohjelma
   tulostaa sellaiset etunimet tabulaattorein toisistaan erotettuina,
   joiden alkuosa vastaa ohjelman URLin q-parametrin arvoa. Esimerkiksi 
   osoitteella http://student.labranet.jamk.fi/~H1234/ajax-suggest.php?q=a
   ohjelma tulostaisi kaikki a:lla alkavat nimet esim.

   Anni\tAnna\tAnni\tAntti\tAri

   TÃ¤mÃ¤ esimerkki muokattu ohjelmasta:
   http://www.w3schools.com/php/php_ajax_php.asp

*/

$name[]="Aino";
$name[]="Anna";
$name[]="Anni";
$name[]="Antti";
$name[]="Ari";
$name[]="Bengt";
$name[]="Bertta";
$name[]="Birgitta";
$name[]="Ceb";
$name[]="Cecilia";
$name[]="Chelsea";
$name[]="Danny";
$name[]="Eeva";
$name[]="Eija";
$name[]="Firo";
$name[]="George";
$name[]="Hanna";
$name[]="Ilkka";
$name[]="Janne";
$name[]="Jari";
$name[]="Jutta";
$name[]="Kalle";
$name[]="Lukas";
$name[]="Martti";
$name[]="Niilo";
$name[]="Olivia";
$name[]="Pentti";
$name[]="Quentin";
$name[]="Risto";
$name[]="Sami";
$name[]="Sani";
$name[]="Seija";
$name[]="Seppo";
$name[]="Sinikka";
$name[]="Tuija";
$name[]="Unto";
$name[]="Veeti";
$name[]="Wilma";
$name[]="Xynthia";
$name[]="Zeus";


$q=$_REQUEST["q"]; $vihje="";

if ($q !== "")
  { $q=strtolower($q); $len=strlen($q);
    foreach($name as $n)
    { if (stristr($q, substr($n,0,$len)))
      { if ($vihje==="")
        { $vihje=$n; }
        else
        { $vihje .= "\t" . $n; }
      }
    }
  }

echo $vihje==="" ? "" : $vihje;
?>
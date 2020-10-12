<?php
$recepient = "anastasia@promo01.ru";
$sitename = "Cards";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$city = trim($_POST["city"]);
$message = "Имя: $name \nТелефон: $phone \nГород: $city";
$pagetitle = "Новая заявка с сайта \"$sitename\". Форма 'Отправить заявку'";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
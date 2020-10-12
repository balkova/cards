<?php
$recepient = "anastasia@promo01.ru";
$sitename = "Cards";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";
$pagetitle = "Новая заявка с сайта \"$sitename\". Форма 'Связаться с нами'";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
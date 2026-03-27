<?php

function obtenerConexion(): PDO
{
    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $baseDeDatos = "Viajes-2";

 $pdo = new PDO(
    "mysql:host=127.0.0.1;port=3306;dbname=$baseDeDatos;charset=utf8mb4",
    $usuario,
    $clave
);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    return $pdo;
}
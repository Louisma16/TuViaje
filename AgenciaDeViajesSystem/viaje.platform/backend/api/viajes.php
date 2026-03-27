<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

require_once("../config/db.php");
require_once("../controllers/ViajesController.php");

try {
    // conexión
    $conexion = obtenerConexion();

    // crear controlador
    $controller = new viajescontroller($conexion);

    // obtener datos
    $viajes = $controller->obtenerViajes();

    // responder
    echo json_encode($viajes);

} catch (Exception $e) {
    echo json_encode([
        "error" => $e->getMessage()
    ]);
}
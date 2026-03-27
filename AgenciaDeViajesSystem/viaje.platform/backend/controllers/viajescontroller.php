<?php

class ViajesController
{
    private PDO $conexion;

    public function __construct(PDO $conexion)
    {
        $this->conexion = $conexion;
    }

    public function obtenerViajes(): array
    {
        try {
            $sql = "SELECT * FROM trips";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute();

            return $stmt->fetchAll();

        } catch (PDOException $e) {
            return [
                "error" => $e->getMessage()
            ];
        }
    }
}
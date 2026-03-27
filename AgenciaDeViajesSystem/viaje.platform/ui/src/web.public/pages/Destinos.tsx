import { useEffect, useState } from "react";
import TravelCard from "../../components/TravelCard";

const Destinos = () => {
  const [viajes, setViajes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8003/api/viajes.php")
      .then(res => res.json())
      .then(data => setViajes(data))
      .catch(err => console.error(err));
  }, []);

  const calcularDias = (inicio: string, fin: string) => {
    const d1 = new Date(inicio);
    const d2 = new Date(fin);
    return Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {viajes.map((viaje: any) => (
        <TravelCard
          key={viaje.id}
          nombre={viaje.title}
          precio={Number(viaje.price)}
          cuposDisponibles={viaje.available_seats}
          personasPorViaje={4}
          imagenUrl={
            viaje.image
              ? `http://localhost:8003/${viaje.image}`
              : undefined
          }
          fechaSalida={viaje.start_date}
          duracionDias={calcularDias(viaje.start_date, viaje.end_date)}
          descripcionCorta={viaje.description}
        />
      ))}
    </div>
  );
};

export default Destinos; 
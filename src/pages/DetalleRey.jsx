import { Navigate, useParams } from "react-router-dom";

function DetalleRey() {
  const nombres = [
    "atanagildo",
    "ataulfo",
    "ervigio",
    "leovigildo",
    "recesvinto",
    "sisebuto",
  ],
  { nombre } = useParams(),
    url = "https://www.html6.es/img/rey_",
    nombreRey = nombres.find((rey) => rey === nombre);

  return nombreRey ? (
    <div>
      <img src={`${url}${nombre}.png`} alt={nombre} />
      <h1>
        {nombre.substring(0, 1).toUpperCase() +
          nombre.substring(1).toLowerCase()}
      </h1>
    </div>
  ) : (
    <Navigate to={"/undefined"} />
  );
}

export default DetalleRey;

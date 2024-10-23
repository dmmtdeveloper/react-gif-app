import PropTypes from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  

  return (
    <>
      <h2>{category}</h2>
      {
        isLoading && ( <p>Cargando...</p>) 
      }
     
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

// Definición de las validaciones de las props
GifGrid.propTypes = {
  category: PropTypes.string.isRequired, // category debe ser una cadena y es obligatorio
};

import PropTypes from 'prop-types';

export const GifItem = ({ title, url, id }) => {
  console.log({ title, url, id });


  return (
    <div className="card">
      <img src={url} alt={title} />
      
      <p>{title}</p>
    </div>
  );
};

// Definición de las validaciones de las props
GifItem.propTypes = {
    title: PropTypes.string.isRequired,  // title debe ser una cadena y es obligatorio
    url: PropTypes.string.isRequired,    // url debe ser una cadena y es obligatorio
    id: PropTypes.string.isRequired,     // id debe ser una cadena y es obligatorio
  };
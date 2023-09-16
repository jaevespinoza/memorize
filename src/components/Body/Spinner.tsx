import "./styles.scss";

/**
 * Componente que muestra la página de carga para mantener la vista escondida
 * hasta que la llamada a la API sea exitosa.
 */
const Spinner = () => {
  return (
    <div className="application-body application-body--loading">
      <div className="spinner-border application-body__spinner" role="status" />
    </div>
  );
};

export default Spinner;

interface Props {
    stock: number;
    addToChart: () => void;
}

export const AddBtn = ({stock, addToChart}: Props) => {
    return (
      <button
        disabled={!Boolean(stock)}
        style={{
         
        }}
        onClick={addToChart}
      >
        AGREGAR
      </button>
    );
  };
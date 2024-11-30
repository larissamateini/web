import { FiMinus, FiPlus } from "react-icons/fi";
import { Container } from "./styles";

export function NumberPicker({ number, setNumber }) {
  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  return (
    <Container>
      <button onClick={decrement}>
        <FiMinus />
      </button>

      <span>
        {number < 10 ? `0${number}` : number}
      </span>
      
      <button onClick={increment}>
        <FiPlus />
      </button>
    </Container>
  );
}

import { useMediaQuery } from "react-responsive";
import { Container } from "./styles";
import { TbReceipt } from "react-icons/tb";

export function Button({ title, loading = false, isCustomer, ...rest }) {
  const desktopScreen = useMediaQuery({ minWidth: 1024 });
  
  return (
    <Container 
      type="button" 
      disabled={loading} 
      {...rest}
    >

      {
        (isCustomer && desktopScreen) &&
        <TbReceipt size={"2rem"} />
      }
      
      {loading ? "Carregando..." : title}

      
    </Container>
  );
}
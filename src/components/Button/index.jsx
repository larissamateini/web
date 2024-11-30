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
        isCustomer &&
        <TbReceipt size={"3rem"} />
      }
      
      {loading ? "Carregando..." : title}

      {
        isCustomer && 
        <span>
          {
          desktopScreen ? `(${rest.orderCount})` 
          : rest.orderCount
          }
        </span>
      }
    </Container>
  );
}
import { useMediaQuery } from "react-responsive";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { MdClose } from "react-icons/md";
import { FiMenu, FiLogOut } from "react-icons/fi";

import { Container, Menu, Logo, Logout } from "./styles";
import { Search } from "../../components/Search";
import { Button } from "../../components/Button";
import { Fragment } from "react";

import logoMain from "../../assets/logo.svg";
import logoAdmin from "../../assets/logo-admin.svg";
import logoMobile from "../../assets/logo-mobile.svg";

export function Header({ isAdmin, isDisabled, isMenuOpen, setIsMenuOpen, setSearch }) {
  const desktopScreen = useMediaQuery({ minWidth: 1024 });
  const logo = isAdmin ? (desktopScreen ? logoAdmin : logoMobile) : logoMain;
  
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleFavorites() {
    navigate("/favorites");
  }

  function handleNew() {
    navigate("/new");
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      {
        !desktopScreen && (
        <Menu>
          {
            !isMenuOpen ?
            <FiMenu className="fi-menu-icon" onClick={() => setIsMenuOpen(true)} /> 
            :
            <Fragment>
              <MdClose size={"2.5rem"} onClick={() => setIsMenuOpen(false)} />
              <span>Menu</span>
            </Fragment>
          }
        </Menu>
      )}

      {
        (desktopScreen || !isMenuOpen) && (
        <Fragment>
          <Logo>
            <img src={logo} alt="Logo" />
          </Logo>

          {
          desktopScreen && 
            <Search isDisabled={isDisabled} setSearch={setSearch} />
          }

          {
            (desktopScreen && !isAdmin) &&
            <button className="favorites" onClick={handleFavorites}>
              Favoritos
            </button>
          }

          {
            isAdmin ? 
            (
              desktopScreen && 
              <Button 
                className="new" 
                title="Novo prato" 
                onClick={handleNew} 
              />
            ) :
            <Button 
              className="orders" 
              title={desktopScreen ? "Pedidos" : undefined} isCustomer 
              orderCount={0} 
            />
          }

          {
            desktopScreen &&
            <Logout onClick={handleSignOut}>
              <FiLogOut size={"rem"} />
            </Logout>
          }
        </Fragment>
      )}
    </Container>
  );
}

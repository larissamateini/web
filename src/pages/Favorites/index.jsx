import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { RxCaretLeft } from "react-icons/rx";

import { Container, Content } from "./styles";
import { Menu } from "../../components/Menu";
import { Header } from '../../components/Header';
import { ButtonText } from "../../components/ButtonText";
import { Favorite } from '../../components/Favorite';
import { Footer } from '../../components/Footer';

export function Favorites({ isAdmin }) {
  const desktopScreen = useMediaQuery({ minWidth: 1024 });

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [favoriteDishes, setFavoriteDishes] = useState([]);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    const fetchFavoriteDishes = async () => {
      try {
        const response = await api.get("/favorites");
        setFavoriteDishes(response.data);
      } catch (error) {
        console.log("Erro ao buscar favorites.", error);
      }
    };
  
    fetchFavoriteDishes();
  }, []);  

  const removeFavoriteDish = async (dishId) => {
    try {
      await api.delete(`/favorites/${dishId}`);

      setFavoriteDishes((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite.id !== dishId)
      );
    } catch (error) {
      console.log('Erro ao atualizar favorites.', error);
    }
  };

  return (
    <Container>
      {
        !desktopScreen && 
        <Menu 
          isAdmin={isAdmin} 
          isMenuOpen={isMenuActive} 
          setIsMenuOpen={setIsMenuActive} 
        />
      }

      <Header 
        isAdmin={isAdmin} 
        isMenuOpen={isMenuActive} 
        setIsMenuOpen={setIsMenuActive} 
      />

      {
        favoriteDishes && 
        <main>
          <div>
            <header>
              <ButtonText onClick={handleBack}>
                <RxCaretLeft />voltar
              </ButtonText>

              <h1>Meus favoritos</h1>
            </header>

            <Content>
              {
                favoriteDishes.map(favorite => (
                  <Favorite 
                    key={String(favorite.id)}
                    data={favorite}
                    removeFavorite={removeFavoriteDish} 
                  />
                ))
              }
            </Content>
          </div>
        </main>
      }

      <Footer />
    </Container>
  );
}

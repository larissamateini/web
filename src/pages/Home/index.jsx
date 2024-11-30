import { useMediaQuery } from "react-responsive";
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Content } from "./styles";
import { Menu } from "../../components/Menu";
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Food } from "../../components/Food";
import { Footer } from '../../components/Footer';

import bannerMobile from "../../assets/banner-mobile.png";
import bannerHome from "../../assets/banner-home.png";

import { register } from "swiper/element/bundle"
register();

export function Home({ isAdmin, user_id }) {
  const desktopScreen = useMediaQuery({ minWidth: 1024 });
  const swiper1 = useRef(null);
  const swiper2 = useRef(null);
  const swiper3 = useRef(null);

  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: .5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.swiper && entry.target.swiper.autoplay.start();

        } else {
          entry.target.swiper && entry.target.swiper.autoplay.stop();

        }        
      });
    }, options);

    observer.observe(swiper1.current);
    observer.observe(swiper2.current);
    observer.observe(swiper3.current);

    return () => {
      observer.disconnect();
    }
  }, []);

  const [dishes, setDishes] = useState({ meals: [], desserts: [], beverages: [] });
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleDishDetails(id) {
    navigate(`/dish/${id}`);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`);
      const meals = response.data.filter(dish => dish.category === "meal");
      const desserts = response.data.filter(dish => dish.category === "dessert");
      const beverages = response.data.filter(dish => dish.category === "beverage");

      setDishes({ meals, desserts, beverages });
    }

    fetchDishes();
  }, [search]);

  const [favoriteDishes, setFavoriteDishes] = useState([]);

  useEffect(() => {
    const fetchFavoriteDishes = async () => {
      try {
        const response = await api.get("/favorites");
        const favoriteDishes = response.data.map((favorite) => favorite.dish_id);

        setFavoriteDishes(favoriteDishes);
      } catch (error) {
        console.log("Erro ao buscar favorites.", error);
      }
    };

    fetchFavoriteDishes();
  }, []);

  const updateFavorite = async (isFavorite, dishId) => {
    try {
      if (isFavorite) {
        await api.delete(`/favorites/${dishId}`);

        setFavoriteDishes((prevFavorites) =>
          prevFavorites.filter((favorite) => favorite !== dishId)
        );
      } else {
        await api.post('/favorites', { dish_id: dishId });
        setFavoriteDishes((prevFavorites) => [...prevFavorites, dishId]);
      }
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
          setSearch={setSearch}
        />
      }

      <Header 
        isAdmin={isAdmin} 
        isMenuOpen={isMenuActive} 
        setIsMenuOpen={setIsMenuActive} 
        setSearch={setSearch}
      />

      <main>
        <div>
          <header>
            <img 
              src={desktopScreen ? bannerHome : bannerMobile} 
              alt="Macarons coloridos ao lado de frutas." 
            />
          
            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </header>

          <Content>
            <Section title="Refeições">
              <swiper-container
                key={desktopScreen}
                ref={swiper1}
                space-between={desktopScreen ? "27" : "16"}
                navigation={desktopScreen ? "true" : "false"}
                slides-per-view="auto"
                loop="true"
                grab-cursor="true"
              >
                {
                  dishes.meals.map(dish => (
                    <swiper-slide key={String(dish.id)}>
                      <Food 
                        isAdmin={isAdmin}
                        data={dish}
                        user_id={user_id}
                        isFavorite={favoriteDishes.includes(dish.id)}
                        updateFavorite={updateFavorite} 
                        handleDetails={handleDishDetails}
                      />
                    </swiper-slide>
                  ))
                }
              </swiper-container>
            </Section>

            <Section title="Sobremesas">
              <swiper-container
                key={desktopScreen}
                ref={swiper2}
                space-between={desktopScreen ? "27" : "16"}
                navigation={desktopScreen ? "true" : "false"}
                slides-per-view="auto"
                loop="true"
                grab-cursor="true"
              >
                {
                  dishes.desserts.map(dish => (
                    <swiper-slide key={String(dish.id)}>

                      <Food 
                        isAdmin={isAdmin}
                        data={dish}
                        user_id={user_id}
                        isFavorite={favoriteDishes.includes(dish.id)}
                        updateFavorite={updateFavorite} 
                        handleDetails={handleDishDetails}
                      />

                    </swiper-slide>
                  ))
                }
              </swiper-container>
            </Section>

            <Section title="Bebidas">
              <swiper-container
                key={desktopScreen}
                ref={swiper3}
                space-between={desktopScreen ? "27" : "16"}
                navigation={desktopScreen ? "true" : "false"}
                slides-per-view="auto"
                loop="true"
                grab-cursor="true"
              >
                {
                  dishes.beverages.map(dish => (
                    <swiper-slide key={String(dish.id)}>

                      <Food 
                        isAdmin={isAdmin}
                        data={dish} 
                        user_id={user_id}
                        isFavorite={favoriteDishes.includes(dish.id)}
                        updateFavorite={updateFavorite}
                        handleDetails={handleDishDetails}
                      />
                      
                    </swiper-slide>
                  ))
                }
              </swiper-container>
            </Section>
          </Content>
        </div>
      </main>

      <Footer />
    </Container>
  );
}
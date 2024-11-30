import { useMediaQuery } from 'react-responsive';
import { useState, useEffect, Fragment } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { RxCaretLeft } from "react-icons/rx";

import { Container, Content } from "./styles";
import { Header } from '../../components/Header';
import { Menu } from "../../components/Menu";
import { ButtonText } from "../../components/ButtonText";
import { NumberPicker } from "../../components/NumberPicker";
import { Tag } from '../../components/Tag';
import { Button } from "../../components/Button";
import { Footer } from '../../components/Footer';

export function Dish({ isAdmin, user_id }) {
  const desktopScreen = useMediaQuery({ minWidth: 1024 });
  
  const params = useParams();
  const navigate = useNavigate();

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [data, setData] = useState(null);

  const [number, setNumber] = useState(1);
  const [cartId, setCartId] = useState(null);

  const [loading, setLoading] = useState(false);

  function handleBack() {
    navigate(-1);
  }

  function handleEditDish() {
    navigate(`/edit/${params.id}`);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  }, []);

  async function handleAddCart() {
    setLoading(true);

    try {
      const cartItem = {
        dish_id: data.id,
        name: data.name,
        quantity: number,
      };

      const response = await api.get('/carts', { params: {
         created_by: user_id 
        } 
      });
      const cart = response.data[0];

      if (cart) {
        await api.patch(`/carts/${cart.id}`, { cart_items: [cartItem] });

      } else {
        const createCartResponse = await api.post('/carts', {
          cart_items: [cartItem], 
          created_by: user_id 
        });

        const createCart = createCartResponse.data;

        setCartId(createCart.id);
      }
      alert('Prato adicionado ao carrinho!');

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível adicionar ao carrinho.');
        console.log(error);
      }

    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      {
        !desktopScreen && 
        <Menu 
          isAdmin={isAdmin} 
          isDisabled={true} 
          isMenuOpen={isMenuActive} 
          setIsMenuOpen={setIsMenuActive} 
        />
      }

      <Header 
        isAdmin={isAdmin} 
        isDisabled={true} 
        isMenuOpen={isMenuActive} 
        setIsMenuOpen={setIsMenuActive} 
      />

      {
        data && 
        <main>
          <div>
            <header>
              <ButtonText onClick={handleBack}>
                <RxCaretLeft />voltar
              </ButtonText>
            </header>

            <Content>
              <img src={`${api.defaults.baseURL}files/${data.image}`} alt={data.name} />

              <div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
              
                {
                  data.ingredients && 
                  <section>
                    {
                      data.ingredients.map(ingredient => (
                        <Tag 
                          key={String(ingredient.id)} 
                          title={ingredient.name} 
                        />
                      ))
                    }
                  </section>
                }

                <div className="buttons">
                  {
                    isAdmin ? 
                    <Button 
                      title="Editar prato" 
                      className="edit-dish" 
                      onClick={handleEditDish}
                      loading={loading}
                    /> : 
                    <Fragment> 
                      <NumberPicker 
                        number={number} 
                        setNumber={setNumber} 
                      />
                      <Button 
                        title={
                          desktopScreen ? 
                          `incluir ∙ R$ ${(data.price * number).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` 
                          : 
                          `pedir ∙ R$ ${(data.price * number).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
                        } 

                        className="add-cart" 
                        isCustomer={!desktopScreen}
                        onClick={handleAddCart}
                        loading={loading}
                      />
                    </Fragment>
                  }
                </div>
              </div>
            </Content>
          </div>
        </main>
      }

      <Footer />
    </Container>
  );
}
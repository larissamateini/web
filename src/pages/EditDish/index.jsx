import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

import { Container, Form, Image, Category } from "./styles";
import { Menu } from "../../components/Menu";
import { Header } from '../../components/Header';
import { ButtonText } from "../../components/ButtonText";
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { FoodItem } from '../../components/FoodItem';
import { Textarea } from '../../components/Textarea';
import { Button } from "../../components/Button";
import { Footer } from '../../components/Footer';

export function EditDish({ isAdmin }) {
  const desktopScreen = useMediaQuery({ minWidth: 1024 });
  const [isMenuActive, setIsMenuActive] = useState(false);

  const [dish, setDish] = useState(null);
  const [dishName, setDishName] = useState("");
  const [dishDescription, setDishDescription] = useState("");
  const [dishCategory, setDishCategory] = useState("");
  const [dishPrice, setDishPrice] = useState("");

  const [dishImage, setDishImage] = useState(null);
  const [dishFileName, setDishFileName] = useState("");
  const [updatedDishImage, setUpdatedDishImage] = useState(null);

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`);
        setDish(response.data);

      } catch (error) {
        console.error(error);
      }
    }
    
    fetchDish();
  }, [params.id]);

  useEffect(() => {
    if (dish) {
      setDishFileName(dish.image);
      setDishImage(dish.image);
      setDishName(dish.name);
      setDishCategory(dish.category);
      setDishPrice(dish.price);
      setDishDescription(dish.description);
  
      const listIngredients = dish.ingredients.map((ingredient) => ingredient.name);
      setTags(listIngredients);
    }
  }, [dish]);  

  function handleDishImageChange(event) {
    const file = event.target.files[0];
    setDishImage(file);
    setUpdatedDishImage(file);
    setDishFileName(file.name);
  }

  function handleAddTag() {
    setTags((prevTags) => [...prevTags, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevTags) => prevTags.filter((tag) => tag !== deleted));
  }

  async function handleEditDish() {
    if (!dishImage) {
      return alert("Faça upload da imagem do prato.");
    }

    if (!dishName) {
      return alert("Digite o nome do prato.");
    }

    if (!dishCategory) {
      return alert("Selecione a categoria do prato.");
    }

    if (tags.length === 0) {
      return alert("Informe pelo menos um ingrediente do prato.");
    }

    if (newTag) {
      return alert("Há um ingrediente no campo que não foi adicionado. Clique para adicionar ou deixe o campo vazio.");
    }

    if (!dishPrice) {
      return alert("Digite o preço do prato.");
    }

    if (!dishDescription) {
      return alert("Digite a descrição do prato.");
    }

    setLoading(true);

    try {
      const updatedDish = {
        name: dishName,
        category: dishCategory,
        price: dishPrice,
        description: dishDescription,
        ingredients: tags,
      };
  
      if (dishImage) {
        const formData = new FormData();
        formData.append("image", dishImage);
  
        await api.patch(`/dishes/${params.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
  
      await api.patch(`/dishes/${params.id}`, updatedDish);
  
      alert("Prato atualizado com sucesso!");
      navigate(-1);

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);

      } else {
        alert("Não foi possível atualizar o prato.");
      }

    } finally {
      setLoading(false);
    }
	}

  async function handleRemoveDish() {
    const confirmRemove = window.confirm("Deseja remover o prato?");
  
    if (confirmRemove) {
      setLoading(true);

      try {
        await api.delete(`/dishes/${params.id}`);
        navigate("/");

      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível excluir o prato.");
        }

      } finally {
        setLoading(false);
      }
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

      <main>
        <Form>
          <header>
            <ButtonText onClick={handleBack}>
              <RxCaretLeft />voltar
            </ButtonText>

            <h1>Editar prato</h1>
          </header>

          <div>
            <Section title="Imagem do prato">
              <Image className="dish-image">
                <label htmlFor="image">
                  <FiUpload size={"2.4rem"} />
                  <span>{dishFileName || "Selecione imagem"}</span>

                  <input 
                    id="image" 
                    type="file"
                    onChange={handleDishImageChange}
                  />
                </label>
              </Image>
            </Section>

            <Section title="Nome">
              <Input className="dish-name"
                type="text"
                placeholder="Salada Ceasar"
                value={dishName}
                onChange={event => setDishName(event.target.value)}
              />
            </Section>

            <Section title="Categoria">
              <Category className="category">
                <label htmlFor="category">

                  <select 
                    id="dish-category" 
                    value={dishCategory}
                    onChange={event => setDishCategory(event.target.value)}
                  >
                    <option value="">Selecionar</option>
                    <option value="meal">Refeição</option>
                    <option value="dessert">Sobremesa</option>
                    <option value="beverage">Bebida</option>
                  </select>

                  <RiArrowDownSLine size={"2.4rem"} />
                </label>
              </Category>
            </Section>
          </div>

          <div>
            <Section title="Ingredientes">
              <div className="tags-ingredients">
                {
                  tags.map((tag, index) => (
                    <FoodItem
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))
                }

                <FoodItem
                  isNew
                  placeholder="Adicionar"
                  value={newTag}
                  onChange={(event) => setNewTag(event.target.value)}
                  onClick={handleAddTag}
                />
              </div>
            </Section>

            <Section title="Preço">
              <Input className="dish-price"
                placeholder="R$ 00,00" 
                type="number"
                value={dishPrice}
                onChange={event => setDishPrice(event.target.value)}
              />
            </Section>
          </div>

          <Section title="Descrição">
            <Textarea 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              defaultValue={dishDescription}
              onChange={(event) => setDishDescription(event.target.value)}
            />
          </Section>

          <div className="buttons">
            <Button 
              className="delete-dish" 
              title="Excluir prato" 
              onClick={handleRemoveDish} 
              loading={loading}
            />

            <Button
              className="save-updated-dish"
              title="Salvar alterações"
              onClick={handleEditDish}
              loading={loading}
            />
          </div>
        </Form>
      </main>
      
      <Footer />
    </Container>
  );
}
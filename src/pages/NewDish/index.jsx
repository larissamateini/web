import { useMediaQuery } from "react-responsive";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

export function NewDish({ isAdmin }) {
  const desktopScreen = useMediaQuery({ minWidth: 1024 });
  const [isMenuActive, setIsMenuActive] = useState(false);

  const [dishName, setDishName] = useState("");
	const [dishDescription, setDishDescription] = useState("");
  const [dishCategory, setDishCategory] = useState("");
  const [dishPrice, setDishPrice] = useState("");

  const [dishImage, setDishImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const [ingredientsTags, setIngredientsTags] = useState([]);
  const [newIngredientTag, setNewIngredientTag] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    setDishImage(file);
    setFileName(file.name);
  }

  function handleAddIngredientTag() {
    setIngredientsTags((prevTags) => [
      ...prevTags, 
      newIngredientTag
    ]);

    setNewIngredientTag("");
  }

  function handleRemoveIngredientTag(deleted) {
    setIngredientsTags((prevTags) => prevTags.filter((tag) => tag !== deleted));
  }

  async function handleNewDish() {
    if (!dishImage) {
      return alert("Carregue a imagem do prato.");
    }

    if (!dishName) {
      return alert("Digite o nome do prato.");
    }

    if (!dishCategory) {
      return alert("Selecione a categoria do prato.");
    }

    if (ingredientsTags.length === 0) {
      return alert("Informe pelo menos um ingrediente.");
    }

    if (newIngredientTag) {
      return alert("Há um ingrediente no campo que não foi adicionado. Clique para adicionar ou deixe o campo vazio.");
    }

    if (!dishPrice) {
      return alert("Digite o preço do prato.");
    }

    if (!dishDescription) {
      return alert("Digite a descrição do prato.");
    }

    setLoading(true);
    
		const formData = new FormData();
    formData.append("image", dishImage);
    formData.append("name", dishName);
    formData.append("category", dishCategory);
    formData.append("price", dishPrice);
    formData.append("description", dishDescription);
    formData.append("ingredients", JSON.stringify(ingredientsTags));
    
    try {
      await api.post("/dishes", formData);
      alert("Prato cadastrado com sucesso!");
      navigate(-1);

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar o prato.");
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

      <main>
        <Form>
          <header>
            <ButtonText onClick={handleBack}>
              <RxCaretLeft />voltar
            </ButtonText>

            <h1>Adicionar prato</h1>
          </header>

          <div>
            <Section title="Imagem do prato">
              <Image className="image">
                <label htmlFor="image">

                  <FiUpload size={"2.4rem"} />
                  <span>{fileName || "Selecione imagem"}</span>
                  <input 
                    id="image" 
                    type="file"
                    onChange={handleImageChange}
                  />
                </label>

              </Image>
            </Section>

            <Section title="Nome">
              <Input className="name"
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
                    id="category" 
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
              <div className="tags">
                {
                  ingredientsTags.map((tag, index) => (
                    <FoodItem
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveIngredientTag(tag)}
                    />
                  ))
                }

                <FoodItem
                  isNew
                  placeholder="Adicionar"
                  value={newIngredientTag}
                  onChange={(event) => setNewIngredientTag(event.target.value)}
                  onClick={handleAddIngredientTag}
                />
              </div>
            </Section>

            <Section title="Preço">
              <Input className="price"
                type="number"
                placeholder="R$ 00,00" 
                value={dishPrice}
                onChange={event => setDishPrice(event.target.value)}
              />
            </Section>
          </div>

          <Section title="Descrição">
            <Textarea 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(event) => setDishDescription(event.target.value)}
            />
          </Section>

          <div className="save-changes">
            <Button
              title="Salvar prato"
              onClick={handleNewDish}
              loading={loading}
            />
          </div>
        </Form>
      </main>
      
      <Footer />
    </Container>
  );
}
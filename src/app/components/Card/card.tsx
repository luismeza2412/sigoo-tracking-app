
import React, { FormEvent, useState } from 'react';
import { useGuia } from '@/app/context/GuiaContext';
import { useRouter } from "next/navigation";
import { fetchGuia } from '@/app/actions/fetchGuia';
import Image from 'next/image';
import {
  Container,
  Card,
  CardTitle,
  CardButtons,
  ButtonGray,
  ButtonBlue,
  SearchContainer,
  SearchInput,
  SearchButton,
  LinkButton,
  Arrow,
} from './card.styled';


const CardComponent: React.FC = () => {

  const [guia, setGuia] = useState("");
  const { setData } = useGuia();
  const router = useRouter();

  
  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();
    if (guia.trim()) {
      try {
        const data = await fetchGuia(guia); // Llama al action en el servidor
        setData(data); // Actualiza el estado en el cliente
        router.push("/detail"); // Redirige a la página de detalles
      } catch (error) {
        alert("Error: " + error);
      }
    }
  };

  return (
    <Container>
      <Card>
        <CardTitle>Selecciona la consulta que quieres realizar</CardTitle>
        
        <CardButtons>
          <ButtonGray>
            <span>
              <Image
                src="/assets/search-24px white.svg"
                alt="Guías"
                width={24} 
                height={24}
              />
            </span>
            Guías
          </ButtonGray>
          <ButtonBlue>
            <span>
              <Image
                src="/assets/escaner.svg"
                alt="Etiquetas"
                width={24} 
                height={24}
              />
            </span>
            Etiquetas
          </ButtonBlue>
        </CardButtons>
        <form onSubmit={handleSearch}>
        <SearchContainer>
          <SearchInput type="text" placeholder="Buscar número de guía..." value={guia} onChange={(e) => setGuia(e.target.value)}
          required  />
          <SearchButton>Buscar</SearchButton>
        </SearchContainer> 
        <LinkButton href="#">
          Buscar múltiples guías <Arrow>→</Arrow>
        </LinkButton>
        </form>
      </Card>
    </Container>
  );
};

export default CardComponent;

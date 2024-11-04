"use client";
import React, { useState } from 'react';
import { Container, TabsNav, TabButton, Content, TabContent, ContainerInfo, ContainerItem, TitleInfo, DataInfo, Section, Title, Subtitle, Strong, Button, Description, StatusLineWrapper, StatusLineContainer, StatusItem, StatusIcon, StatusConnector, DateText, StatusTitle, Icon, GeneralCont } from './detail.styled';
import { useGuia } from "../context/GuiaContext";

const DetailPage: React.FC = () => {
  const [activeTabTop, setActiveTabTop] = useState('tab1');
  const [activeTabBottom, setActiveTabBottom] = useState('tabA');

  const handleTopTabClick = (tabId: string) => {
    setActiveTabTop(tabId);
  };

  const handleBottomTabClick = (tabId: string) => {
    setActiveTabBottom(tabId);
  };

  interface Status {
    icon: string;
    date: string;
    title: string;
    completed: boolean;
    current?: boolean;
  }

  

  const statuses: Status[] = [
    { icon: 'assets/Rastrear guía 00480569909 _ coordinadora-1.svg', date: '01/01/2024', title: 'Estado 1', completed: true,  },
    { icon: 'assets/Rastrear guía 00480569909 _ coordinadora-1.svg', date: '02/01/2024', title: 'Estado 2', completed: false, },
    { icon: 'assets/Rastrear guía 00480569909 _ coordinadora-1.svg', date: '03/01/2024', title: 'Estado 3', completed: false,  },
    { icon: 'assets/Rastrear guía 00480569909 _ coordinadora-1.svg', date: '04/01/2024', title: 'Estado 4', completed: false, current: true },
  ];

  const completedCount = statuses.filter(status => status.completed || status.current).length;
  const lineWidthPercentage = (completedCount - 1) / (statuses.length - 1) * 100;
  
  const { data } = useGuia();
  if (!data) {
    return <p>No se encontraron datos de la guía. Intente nuevamente desde la página de búsqueda.</p>;
  }
  const {
    guia,
    remitente,
    destinatario,
    producto,
    servicio,
    cliente

  } = data;

  return (

   


    <div>



<GeneralCont>
<Section>
    <div>
      <div>
        <Title>
          Información General de Envío 
        </Title>
        <Subtitle>
          Guía nivel 1: <span><strong>{guia}</strong></span>
        </Subtitle>
        <Subtitle>
          Unidades: <span>1</span>
        </Subtitle>
      </div>
    </div>
    <div>
      <Strong>
        Macroestado: <Description>Abierta</Description>
      </Strong>
      <Strong>
        Estado Tracking Guía: <Description>Entrega parcial</Description>
      </Strong>
      <Button>Ver Guía Digital</Button>
    </div>
  </Section>


  <StatusLineWrapper>
      <StatusLineContainer lineWidth={lineWidthPercentage}>
        {statuses.map((status, index) => (
          <StatusItem key={index}>
            <StatusIcon key={index} completed={status.completed} current={status.current}>
              <Icon src={status.icon} alt={status.title} />
            </StatusIcon>
            <StatusConnector />
            <DateText>{status.date}</DateText>
            <StatusTitle>{status.title}</StatusTitle>
          </StatusItem>
        ))}
      </StatusLineContainer>
    </StatusLineWrapper>

      {/* Contenedor Superior */}
      <Container>
        <TabsNav aria-label="Navegación de Pestañas Superior">
          <TabButton
            aria-controls="tab1"
            aria-selected={activeTabTop === 'tab1'}
            onClick={() => handleTopTabClick('tab1')}
          >
            Información General
          </TabButton>
          <TabButton
            aria-controls="tab2"
            aria-selected={activeTabTop === 'tab2'}
            onClick={() => handleTopTabClick('tab2')}
          >
            Información de facturación
          </TabButton>
          <TabButton
            aria-controls="tab3"
            aria-selected={activeTabTop === 'tab3'}
            onClick={() => handleTopTabClick('tab3')}
          >
            Novedades y soluciones
          </TabButton>
          <TabButton
            aria-controls="tab4"
            aria-selected={activeTabTop === 'tab4'}
            onClick={() => handleTopTabClick('tab4')}
          >
            Información de entrega
          </TabButton>
        </TabsNav>
        <Content>
          <TabContent id="tab1" isActive={activeTabTop === 'tab1'}>


<ContainerInfo>

    <ContainerItem>
      <TitleInfo>Cliente:</TitleInfo>
      <DataInfo>Nit/div: {cliente.nit} / {cliente.div}</DataInfo>
      <DataInfo>{cliente.razon_social}</DataInfo>
    </ContainerItem>

    <ContainerItem>

    <TitleInfo>Remitente:</TitleInfo>
      <DataInfo>{remitente.nombre}</DataInfo>
      <DataInfo>{remitente.zonificacion.direccion}</DataInfo>
    </ContainerItem>


    <ContainerItem>
    <TitleInfo>Destinatario:</TitleInfo>
      <DataInfo>{destinatario.nombre}</DataInfo>
      <DataInfo>{destinatario.zonificacion.direccion}</DataInfo>
    </ContainerItem>

    <ContainerItem>
      <TitleInfo>Terminal Origen: </TitleInfo>
      <DataInfo>{remitente.zonificacion.codigo_terminal} - {remitente.zonificacion.nombre_terminal}</DataInfo>
    </ContainerItem>
    <ContainerItem>
      <TitleInfo>Terminal Destino:</TitleInfo>
      <DataInfo>{destinatario.zonificacion.codigo_terminal} - {destinatario.zonificacion.nombre_terminal}</DataInfo>
    </ContainerItem>
    <ContainerItem>
      <TitleInfo>Nivel/Servicio</TitleInfo>
      <DataInfo>{servicio.descripcion}</DataInfo>
    </ContainerItem>
    <ContainerItem>
      <TitleInfo>Telefono Remitente</TitleInfo>
      <DataInfo>{remitente.telefono}</DataInfo>
    </ContainerItem>
    <ContainerItem>
    <TitleInfo>Telefono Destinatario</TitleInfo>
    <DataInfo>{destinatario.telefono}</DataInfo>
    </ContainerItem>
    <ContainerItem>
    <TitleInfo>Ciudad Origen</TitleInfo>
    <DataInfo>{remitente.zonificacion.ciudad}</DataInfo>
    </ContainerItem>
    <ContainerItem>
    <TitleInfo>Ciudad Destino</TitleInfo>
    <DataInfo>{destinatario.zonificacion.ciudad}</DataInfo>
    </ContainerItem>
    <ContainerItem>
      <TitleInfo>Observaciones</TitleInfo>
      <DataInfo>3</DataInfo>
    </ContainerItem>
    <ContainerItem>
      <TitleInfo>Producto</TitleInfo>
      <DataInfo>{producto.abreviado_producto}</DataInfo>
    </ContainerItem>
    <ContainerItem>
    <TitleInfo>Contenido</TitleInfo>
    <DataInfo>Pendiente mapeo</DataInfo>
    </ContainerItem>
    <ContainerItem>
    <TitleInfo>Referencia</TitleInfo>
    <DataInfo>Pendiente mapeo</DataInfo>
    </ContainerItem>

</ContainerInfo>

          </TabContent>
          <TabContent id="tab2" isActive={activeTabTop === 'tab2'}>Información de Facturación</TabContent>
          <TabContent id="tab3" isActive={activeTabTop === 'tab3'}>Información de Novedades</TabContent>
          <TabContent id="tab4" isActive={activeTabTop === 'tab4'}>Información de entrega</TabContent>
        </Content>
      </Container>

      {/* Contenedor Inferior */}
      <Container>
        <TabsNav aria-label="Navegación de Pestañas Inferior">
          <TabButton
            aria-controls="tabA"
            aria-selected={activeTabBottom === 'tabA'}
            onClick={() => handleBottomTabClick('tabA')}
          >
            Resumen de unidades
          </TabButton>
          <TabButton
            aria-controls="tabB"
            aria-selected={activeTabBottom === 'tabB'}
            onClick={() => handleBottomTabClick('tabB')}
          >
            Estado actual de unidad
          </TabButton>
          <TabButton
            aria-controls="tabC"
            aria-selected={activeTabBottom === 'tabC'}
            onClick={() => handleBottomTabClick('tabC')}
          >
            Detalle de Unidades
          </TabButton>
        </TabsNav>
        <Content>
          <TabContent id="tabA" isActive={activeTabBottom === 'tabA'}>Información de Resumen</TabContent>
          <TabContent id="tabB" isActive={activeTabBottom === 'tabB'}>Información de Estado</TabContent>
          <TabContent id="tabC" isActive={activeTabBottom === 'tabC'}>Información de detalle</TabContent>
        </Content>
      </Container>
</GeneralCont>
    </div>
  );
};

export default DetailPage;

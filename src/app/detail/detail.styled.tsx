import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1104px;
  align-content: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;

`;

export const GeneralCont = styled.div`
width: 100%;
  max-width: 1104px;
  align-content: center;
  margin: 20px 20% 20px 20%;
  padding: 20px;
`

export const TabsNav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const TabButton = styled.button<{ 'aria-selected': boolean }>`
  padding: 10px;
  color: #000;
  opacity: ${({ 'aria-selected': isSelected }) => (isSelected ? 1 : 0.6)};
  font-size: 10.5pt;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  background: none;
  border: none;
  position: relative;
  flex: 1 1 20%;
  transition: color 0.3s;
  color: ${({ 'aria-selected': isSelected }) => (isSelected ? '#086BB5' : '#000')};

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ 'aria-selected': isSelected }) => (isSelected ? '100%' : '0')};
    height: 3px;
    background-color: #086BB5;
    transition: width 0.3s;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabContent = styled.section<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  padding-top: 10px;
  color: #333;
`;

export const ContainerInfo = styled.section`

display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 16px;

`;

export const ContainerItem = styled.div`
display: block;
`;


export const TitleInfo = styled.p`

color: #000000DE ;
font-family: 'Roboto', sans-serif;
font-size: 10.5pt;
font-weight: 600;

`;

export const DataInfo = styled.p`
font-family: 'Roboto', sans-serif;
color: #00000099;
font-size: 10.5pt;
justify-content: space-between;
`;



export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  color: #086bb5;
  font-weight: bold;
  font-size: 18pt;
  font-weight: 500;

  span {
    color: #000;
    margin-left: 6px;
  }
`;

export const Subtitle = styled.h5`
font-size: 14pt;
margin-top: 0;
margin-bottom: 10px;
  color: #086bb5;
  font-weight: 500;

  span {
    color: #000;
    margin-left: 6px;
  }
`;

export const Description = styled.span`
  color: #000;
  opacity: 0.6;
  font-size: 0.9em;
  font-weight: 400;
`;

export const Button = styled.button`
  border-radius: 20px;
  background-color: #086bb5;
  color: #fff;
  border: none;
  padding: 12px;
  width: 100%;
  max-width: 127px;
`;

export const Strong = styled.strong`
  display: block;
  margin-bottom: 0.3rem;
  align-content: end;
`;



interface StatusLineContainerProps {
  lineWidth: number;
}

interface StatusItemProps {
  completed?: boolean;
  current?: boolean;
}

export const StatusLineWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

export const StatusLineContainer = styled.div<StatusLineContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 25%;
    left: 0;
    height: 2px;
    background-color: #003C82;
    width: ${({ lineWidth }) => lineWidth}%;
    z-index: -1;
  }
`;

export const StatusItem = styled.div<StatusItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const StatusIcon = styled.div<StatusItemProps>`
  background-color: ${({ completed }) => (completed ? '#003C82' : '#E1EDFB')};
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  ${({ current }) => current && `border: 3px solid ##003C82;`}

  img {
    width: 28px;
    height: 28px;
    fill: #fff;
  }
`;

export const StatusConnector = styled.div`
  width: 2px;
  height: 15px;
  background-color: #ccc;
  margin-top: 8px;
  position: relative;
`;

export const DateText = styled.span`
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`;

export const StatusTitle = styled.span`
  font-size: 14px;
  color: #333;
  margin-top: 4px;
`;

export const Icon = styled.img`
width: 20px;
`;


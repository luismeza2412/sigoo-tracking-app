// Card.styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 504px;
  box-shadow: 0px 10px 20px #00000029;
  text-align: center;
  border-radius: 8px;
`;

export const CardTitle = styled.h2`
  color: #0A6BB6;
  font-size: 13.5pt;
  margin-bottom: 15px;
  font-weight: 600;
`;

export const CardButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 15px;
`;

export const ButtonGray = styled.button`
  border: none;
  padding: 6px;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  width: 102px;
  align-items: center;
  justify-content: center;
  background-color: #0A6BB6;

  &:hover {
    background-color: #0A6BB6;
  }
`;

export const ButtonBlue = styled.button`
  border: none;
  padding: 6px;
  border-radius: 50px;
  color: #000000;
  transition: background-color 0.3s;
  opacity: 0.54;
  cursor: pointer;
  display: flex;
  width: 102px;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0000000D;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
`;

export const SearchInput = styled.input`
  background: #0000000D;
  color: #2e2e2e;
  border-radius: 50px 0 0 50px;
  border: none;
  font-weight: 500;
  width: 50%;
  max-width: 400px;
  padding: 8px;
`;

export const SearchButton = styled.button`
  padding: 8px 12px;
  border: none;
  background-color: #0A6BB6;
  color: #fff;
  border-radius: 0 50px 50px 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0A6BB6;
  }
`;

export const LinkButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #00ADEE;
  font-weight: bold;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #039ed6;
  }
`;

export const Arrow = styled.span`
  font-size: 1.2rem;
  margin-left: 5px;
`;

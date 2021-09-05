import styled from "styled-components";

export const MenuComponent = styled.div `
  display: flex;
  flex-direction: row;
`;

export const MenuHamburger = styled.div `
  width: 48px;
  height: 100vh;
`;

export const MenuSwitcher = styled.img `
  margin: 12px;
  width: 24px;

  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MenuContent = styled.div `
  width: 320px;
  min-height: 100vh;
  
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @media screen and (max-width: 768px) {
    transition: 1s width;
    width: ${(props) => (props.isHidden ? "0px" : '70vw')};
    overflow-x: hidden;
  }
`;

export const MenuLogoContainer = styled.div `
  margin-top: 8vh;
  
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 16px;
  }
`;

export const MenuLogoTitle = styled.span `
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  
  color: ${props => props.theme.text};
`;

export const MenuLogoIcon = styled.img `
  width: 24px;
  margin: 0 8px;
`;

export const MenuNavigation = styled.div `
  text-align: center;
  
  margin: 6vh 0px;
  
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    text-align: left;
    margin-top: 0px;
  }
`;

export const MenuNavigationCategory = styled.ul `
  font-family: Poppins;
  font-style: normal;
  line-height: 20px;
  font-weight: ${(props) => (props.selected ? "bold" : 'normal')};
  font-size: ${(props) => (props.selected ? "15px" : '14px')};

  color: ${props => props.theme.text};
  
  margin-top: 32px;
  
  transition: 0.15s font-weight;
  transition: 0.15s font-size;

  &:hover {
    font-size: 15px;
    font-weight: bold;
    
    cursor: pointer;
  }
`;

export const ThemeSwitcherContainer = styled.div `
  margin-bottom: 6vh;
  
  transition: 1s width;
  width: 320px;

  cursor: pointer;
  
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.isHidden ? '120px' : '70vw')};
  }
`;

export const ThemeSwitcherContent = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    transition: 0.3s 0.2s opacity;
    opacity: ${(props) => (props.isHidden ? '0%' : '100%')};
  }
`;

export const ThemeSwitcherIcon = styled.img `
  width: 18px;
  margin-right: 8px;
`;

export const ThemeSwitcherTitle = styled.span `
  color: ${props => props.theme.text};;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;

  @media screen and (max-width: 768px) {
    transition: 0.3s 0.2s opacity;
    opacity: ${(props) => (props.isHidden ? '0%' : '100%')};
  }

  transition: 0.15s font-weight;
  transition: 0.15s font-size;
`;

export const AppVersion = styled.span `
  color: ${(props) => props.theme.text};
  
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  
  position: fixed;
  bottom: 4px;
  left: 4px;
  
  opacity: 0.7;
`
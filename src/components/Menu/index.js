import React, { useState } from 'react';
import styled from "styled-components";
import { useDarkMode } from '../theme/useDarkMode';

const MenuComponent = styled.div `
  display: flex;
  flex-direction: row;
`;

const MenuSandwich = styled.div `
  width: 48px;
  height: 100vh;
`

const MenuSwitcher = styled.img `
  margin: 12px;
  width: 24px;

  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MenuContent = styled.div `
  width: 320px;
  min-height: 100vh;
  
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    transition: 1s width;
    width: ${(props) => (props.isHidden ? "0px" : '70vw')};
    overflow-x: hidden;
  }
  
  overflow-y: scroll;
`;

const MenuLogo = styled.div `
  margin-top: 8vh;
  
  display: flex;
  flex-direction: row;
  
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 16px;
  }
`;

const MenuLogoTitle = styled.span `
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  
  color: ${props => props.theme.text};
`;

const MenuLogoImage = styled.img `
  width: 26px;
  margin: 0 8px;
`;

const MenuNavigation = styled.div `
  text-align: center;
  
  margin: 6vh 0px;
  
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    text-align: left;
    margin-top: 0px;
  }
`;

const MenuCategory = styled.ul `
  font-family: Poppins;
  font-style: normal;
  line-height: 20px;
  font-weight: ${(props) => (props.selected ? "bold" : 'normal')};
  font-size: ${(props) => (props.selected ? "15px" : '14px')};

  color: ${props => props.theme.text};
  
  margin-top: 32px;
  
  transition: 0.3s font-weight;
  transition: 0.3s font-size;

  &:hover {
    font-size: 15px;
    font-weight: bold;
    
    cursor: pointer;
  }
`;

const ThemeSwitcher = styled.div `
  margin-bottom: 6vh;
  
  transition: 1s width;
  width: 320px;

  cursor: pointer;
  
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.isHidden ? '120px' : '70vw')};
  }
`;

const ThemeSwitcherContent = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    transition: 0.3s 0.2s opacity;
    opacity: ${(props) => (props.isHidden ? '0%' : '100%')};
  }
`;

const ThemeSwitcherIcon = styled.img `
  width: 18px;
  margin-right: 8px;
`;

const ThemeSwitcherTitle = styled.span `
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
`;

const AppVersion = styled.span `
  color: ${(props) => props.theme.text};
  
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  
  position: fixed;
  bottom: 4px;
  left: 4px;
`

const logoLightSrc = "/images/logoDark.svg";
const logoDarkSrc = "/images/logo.svg";

const darkModeIconSrc = "https://image.flaticon.com/icons/png/512/581/581601.png";
const lightModeIconSrc = "https://image.flaticon.com/icons/png/512/146/146182.png"

const menuCategories = [
    {
        value: 'Dashboard'
    },
    {
        value: 'API'
    },
    {
        value: 'Products'
    },
    {
        value: 'About'
    },
    {
        value: 'Company'
    },
    {
        value: 'About'
    },
    {
        value: 'Company'
    },
]



export default function Menu() {

    const [selectedCategory, setSelectedCategory] = useState(0);
    const [isHidden, setIsHidden] = useState(localStorage.getItem('menuIsHidden' ? 'true' : 'false'));

    const theme = useDarkMode();

    const hideMenuHandler = () => {
        localStorage.setItem('menuIsHidden', !isHidden ? 'true' : 'false')
        setIsHidden(!isHidden)
    }

    const renderMenu = (item, index) => {
        return (
            <MenuCategory
                index={index}
                selected={Number(selectedCategory) === Number(index) ? true : null}
                onClick={()=>{setSelectedCategory(index)}}
            >{item.value}</MenuCategory>
        );
    }

    return (
        <MenuComponent>
            <MenuContent isHidden={isHidden}>
                <MenuLogo>
                    <MenuLogoImage src={theme.isDarkTheme ? logoDarkSrc : logoLightSrc}/>
                    <MenuLogoTitle>BlueBeakStd</MenuLogoTitle>
                </MenuLogo>
                <MenuNavigation>
                    {menuCategories.map(renderMenu)}
                </MenuNavigation>
                <ThemeSwitcher isHidden={isHidden}>
                    <ThemeSwitcherContent onClick={theme.handleChange}>
                        <ThemeSwitcherIcon src={theme.isDarkTheme ? darkModeIconSrc : lightModeIconSrc}/>
                        <ThemeSwitcherTitle isHidden={isHidden}>{theme.isDarkTheme ? "Dark Mode" : "Light Mode"}</ThemeSwitcherTitle>
                    </ThemeSwitcherContent>
                </ThemeSwitcher>
                <AppVersion>0.0.2 alpha</AppVersion>
            </MenuContent>
            <MenuSandwich>
                <MenuSwitcher isHidden={isHidden} src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" onClick={hideMenuHandler}/>
            </MenuSandwich>
        </MenuComponent>
    )
}
import React, { useState } from 'react';
import styled from "styled-components";
import { useDarkMode } from '../theme/useDarkMode';

import {
    MenuComponent,MenuContent,
    MenuHamburger, MenuSwitcher,
    MenuLogoContainer, MenuLogoTitle, MenuLogoIcon,
    MenuNavigation, MenuNavigationCategory,
    ThemeSwitcherContainer, ThemeSwitcherContent, ThemeSwitcherIcon, ThemeSwitcherTitle,
    AppVersion,
} from "./styles";

const logoLightSrc = "/images/logoDark.svg";
const logoDarkSrc = "/images/logo.svg";

const darkModeIconSrc = "/images/darkTheme.png";
const lightModeIconSrc = "/images/lightTheme.png";

const menuLightIconSrc = "/images/menuLight.png";
const menuDarkIconSrc = "/images/menuDark.png";


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
            <MenuNavigationCategory
                index={index}
                selected={Number(selectedCategory) === Number(index) ? true : null}
                onClick={()=>{setSelectedCategory(index)}}
            >{item.value}</MenuNavigationCategory>
        );
    }

    return (
        <MenuComponent>
            <MenuContent isHidden={isHidden}>
                <MenuLogoContainer>
                    <MenuLogoIcon src={theme.isDarkTheme ? logoDarkSrc : logoLightSrc}/>
                    <MenuLogoTitle>BlueBeakStd</MenuLogoTitle>
                </MenuLogoContainer>
                <MenuNavigation>
                    {menuCategories.map(renderMenu)}
                </MenuNavigation>
                <ThemeSwitcherContainer isHidden={isHidden} onClick={theme.handleChange}>
                    <ThemeSwitcherContent>
                        <ThemeSwitcherIcon src={theme.isDarkTheme ? darkModeIconSrc : lightModeIconSrc}/>
                        <ThemeSwitcherTitle isHidden={isHidden}>{theme.isDarkTheme ? "Dark Mode" : "Light Mode"}</ThemeSwitcherTitle>
                    </ThemeSwitcherContent>
                </ThemeSwitcherContainer>
                <AppVersion>0.0.2 alpha</AppVersion>
            </MenuContent>
            <MenuHamburger>
                <MenuSwitcher isHidden={isHidden} src={theme.isDarkTheme ? menuDarkIconSrc : menuLightIconSrc } onClick={hideMenuHandler}/>
            </MenuHamburger>
        </MenuComponent>
    )
}
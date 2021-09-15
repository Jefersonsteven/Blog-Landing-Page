import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.scss';
import { Header } from './components/Header.jsx'
import { Main } from './components/Main.jsx'
import { Footer } from './components/Footer.jsx'
import React from 'react';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header />, document.querySelector('header'));
ReactDOM.render(<Main />, document.querySelector('main'));
ReactDOM.render(<Footer />, document.querySelector('footer'));


//{
    //Abrir y cerra el menu
const menu = document.querySelector('.header__menu-content');
const menuButton = document.querySelector('.menu-button');
let menuOpen = false;

menuButton.addEventListener('click', () => {
    if(!menuOpen){
        menu.style.display = 'flex';
        menuOpen = true;
    } else {
        menu.style.display = 'none';
        menuOpen = false;
    }
})

//}

//{
// Abrir y Cerrar el submenu de connect
const submenu = document.querySelector('.menu__option-submenu');
const optionConnect = document.querySelector('.option-connect');
let submenuOpen = false;

optionConnect.addEventListener('click', () => {
    if (!submenuOpen) {
        submenu.style.display = 'flex';
        submenuOpen = true;
    }
    else {
        submenu.style.display = 'none';
        submenuOpen = false;
    }
})
//}
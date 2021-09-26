import React from 'react';
import Logo from '../../assets/Icon.svg';
import * as styles from './Header.module.css';
import Nav from '../Nav/Nav';


const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="" />
            <Nav />
        </header>
    )
}
export default Header

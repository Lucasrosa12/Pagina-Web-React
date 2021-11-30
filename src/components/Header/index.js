import React from "react";
import './style.scss';
import logoAcessaBr from '../../images/logo-acessaBR.svg'
import logoEbac from '../../images/logo-ebac.svg'

const Header = props => {
    return(
        <header className="header__container">
            <div className="header__logo header__logo--state">
                
                <img src={logoAcessaBr} alt="Logo acessaBR"/>
                <span className="header__city">
                    / Gravataí - RS
                </span>
            </div>

            <div className="header__logo--ebac">
                <span className="header__span">
                    Apoio:
                </span>
                <img src={logoEbac} alt="Logo Ebac"/>
            </div>


        </header>
    )
}

export default Header;
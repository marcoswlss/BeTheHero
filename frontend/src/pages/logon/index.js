import React from 'react';
import styles from './styles.css';
import heroImg from '../../assets/heroes.png';
import logoimg from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
export default function logon(){

    return(
       
       <div className="logon-container">
           <section className="form">
                <img src={logoimg} alt="be the hero"/>   
                <form>

                    <h1>Faca seu login</h1>

                    <input placeholder="Sua ID"/>

                    <button className="button" type="submit">Entrar</button>

                    <Link className="backLink" to="/register">
                        <FiLogIn size={16} color="#E02041"/>Nao tenho cadastro
                    </Link>
                    
                </form>

           </section>
           <img src={heroImg} alt="heroes"/>
       </div>
    );
}
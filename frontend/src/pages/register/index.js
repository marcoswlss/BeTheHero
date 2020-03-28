import React from 'react';
import logoimg from '../../assets/logo.svg';
import {Link} from 'react-router-dom'; 
import {FiArrowLeft} from 'react-icons/fi';
import styles from './styles.css';



export default function register(){

    return(
       <div className="register-container">
           <div className="content">
                <section>
                    <img src={logoimg} alt="be the hero"/>      
                    <h1>Cadastro</h1> 
                    <p>entre na plataforma e ajude pessoas da sua ong</p>             
                    <Link className="backLink" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>ja tenho cadastro
                    </Link>
                </section>
                <form>
                    <input placeholder="nome da ong"/>
                    <input type="email" placeholder="E-mail"/>
                    <input  placeholder="whastsapp"/>
                    <div className="input-group">
                        <input  placeholder="cidade"/>
                        <input  placeholder="UF" style={{width: 80}}/>
                    </div>
                    <button className="button" type="submit">cadastrar</button>
                </form>
           </div>
       </div>
    
    );
}
import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <a class="icone" href="https://github.com/TiagoTHS">
        <i class="fab fa-github"></i>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
        {' '}
        por
        {' '}
        <a href="https://twitter.com/_tiagossouza">
          Tiago Souza
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;

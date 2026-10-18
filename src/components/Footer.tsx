import Logo from './Logo';

import instagram from '../assets/icons/instagram.svg';
import facebook from '../assets/icons/facebook.svg';
import linkedin from '../assets/icons/linkedin.svg';

const socials = [
  { name: 'Instagram', icon: instagram},
  { name: 'Facebook', icon: facebook},
  { name: 'LinkedIn', icon: linkedin},
];

const cols = {
  Institucional: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  Ajuda: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  Termos: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul className="footer__social">
            {socials.map(({ name, icon}) => (
              <li key={name}>
                <img src={icon} alt="" width={24} height={24} />
              </li>
            ))}
          </ul>
        </div>
        <nav className="footer__cols" aria-label="Rodapé">
          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <h3>{title}</h3>
              <ul>{links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
            </div>
          ))}
        </nav>
      </div>
      <p className="footer__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </footer>
  );
}

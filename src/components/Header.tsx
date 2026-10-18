import Logo from './Logo';

import shield from '../assets/icons/shield.svg';
import truck from '../assets/icons/Truck.svg';
import card from '../assets/icons/CreditCard.svg';
import pedidos from '../assets/icons/Group.svg';
import favoritos from '../assets/icons/Heart.svg';
import conta from '../assets/icons/UserCircle.svg';
import carrinho from '../assets/icons/ShoppingCart.svg';
import crown from '../assets/icons/CrownSimple.svg';
import glass from '../assets/icons/MagnifyingGlass.svg';

const benefits = [
  { icon: shield, before: 'Compra ', highlight: '100% segura', after: '' },
  { icon: truck, before: '', highlight: 'Frete grátis', after: ' acima de R$ 200' },
  { icon: card, before: '', highlight: 'Parcele', after: ' suas compras' },
];
const nav = ['Todas categorias', 'Supermercado', 'Livros', 'Moda', 'Lançamentos', 'Ofertas do dia', 'Assinatura'];

const actions = [
  { label: 'Pedidos', icon: pedidos },
  { label: 'Favoritos', icon: favoritos },
  { label: 'Minha conta', icon: conta },
  { label: 'Carrinho', icon: carrinho },
];

export default function Header() {
  return (
    <header className="header">
      <ul className="header__benefits">
        {benefits.map(({ icon, before, highlight, after }) => (
          <li key={highlight}>
            <img src={icon} alt="" width={20} height={20} />
            <span>
              {before}<strong>{highlight}</strong>{after}
            </span>
          </li>
        ))}
      </ul>
      <div className="container header__main">
        <Logo />
        <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
          <input type="search" placeholder="O que você está buscando?" aria-label="Buscar produtos" />
          <button type="submit" aria-label="Buscar"><img src={glass} alt="" width={28} height={28} /></button>
        </form>
        <div className="header__actions">
          {actions.map(({label,icon}) => (
            <button key={label} aria-label={label} className="icon-btn"><img src={icon} alt="" width={32} height={32} /> </button>
          ))}
        </div>
      </div>
      <nav className="container nav" aria-label="Categorias">
        <ul>
          {nav.map((item) => (
            <li key={item}>
                <a href="#" className={item === 'Ofertas do dia' ? 'is-highlight' : ''}>
                {item === 'Assinatura' && <img src={crown} alt="" width={20} height={20} />}
                {item}
                </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

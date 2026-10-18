import { useState } from 'react';

import tec from '../assets/icons/image.svg'
import market from '../assets/icons/supermercados 1.svg'
import drinks from '../assets/icons/whiskey.svg'
import tools from '../assets/icons/ferramentas 1.svg'
import healthy from '../assets/icons/cuidados-de-saude 1.svg'
import sport from '../assets/icons/corrida 1.svg'
import modal from '../assets/icons/moda 1.svg'

const categories = [
  {icon: tec, type: 'Tecnologia'},
  {icon: market, type: 'Supermercado'}, 
  {icon: drinks, type: 'Bebidas'},
  {icon: tools, type: 'Ferramentas'}, 
  {icon: healthy, type: 'Saúde'}, 
  {icon: sport, type: 'Esportes e Fitness' }, 
  {icon: modal, type: 'Moda'}
];

export default function Categories() {
  const [active, setActive] = useState(0);
  return (
    <section className="container" aria-label="Categorias em destaque">
      <ul className="categories">
        {categories.map((c, i) => (
          <li key={c.type}>
            <button className={`category ${i === active ? 'is-active' : ''}`} onClick={() => setActive(i)} aria-pressed={i === active}>
              <span className="category__icon" aria-hidden="true">
                  <img src={c.icon} alt="" width={61} height={61} />
              </span>
              <span className="category__label">{c.type}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

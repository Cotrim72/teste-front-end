import { useRef, useState } from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
  loading: boolean;
  error: string | null;
  onSelect: (p: Product) => void;
  tabs?: string[];
}

export default function ProductSection({ products, loading, error, onSelect, tabs }: Props) {
  const track = useRef<HTMLUListElement>(null);
  const [tab, setTab] = useState(0);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="container products" id="produtos" aria-labelledby="titulo-produtos">
      <h2 className="section-title" id="titulo-produtos"><span>Produtos relacionados</span></h2>

      {tabs ? (
        <div className="tabs" role="tablist">
          {tabs.map((t, i) => (
            <button key={t} role="tab" aria-selected={i === tab} className={i === tab ? 'is-active' : ''} onClick={() => setTab(i)}>{t}</button>
          ))}
        </div>
      ) : (
        <a className="products__all" href="#">Ver todos</a>
      )}

      {loading && <p className="status">Carregando produtos...</p>}
      {error && <p className="status status--error" role="alert">{error}</p>}

      {!loading && !error && (
        <div className="carousel">
          <button className="carousel__arrow carousel__arrow--prev" onClick={() => scroll(-1)} aria-label="Anterior">‹</button>
          <ul className="carousel__track" ref={track}>
            {products.map((p) => (
              <li key={p.productName}><ProductCard product={p} onSelect={onSelect} /></li>
            ))}
          </ul>
          <button className="carousel__arrow carousel__arrow--next" onClick={() => scroll(1)} aria-label="Próximo">›</button>
        </div>
      )}
    </section>
  );
}

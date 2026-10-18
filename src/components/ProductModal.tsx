import { useEffect, useState } from 'react';
import type { Product } from '../types';
import { formatPrice } from '../utils/format';

interface Props { product: Product; onClose: () => void }

export default function ProductModal({ product, onClose }: Props) {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Fechar">✕</button>
        <img className="modal__img" src={product.photo} alt={product.productName} />
        <div className="modal__info">
          <h2 id="modal-title">{product.productName}</h2>
          <p className="modal__price">{formatPrice(product.price)}</p>
          <p className="modal__desc">{product.descriptionShort}</p>
          <a className="modal__more" href="#">Veja mais detalhes do produto &gt;</a>
          <div className="modal__buy">
            <div className="qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Diminuir quantidade">−</button>
              <output aria-live="polite">{String(qty).padStart(2, '0')}</output>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Aumentar quantidade">+</button>
            </div>
            <button className="btn btn--yellow btn--buy">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

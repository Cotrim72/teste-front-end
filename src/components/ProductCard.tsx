import type { Product } from '../types';
import { formatPrice } from '../utils/format';

interface Props { product: Product; onSelect: (p: Product) => void }

export default function ProductCard({ product, onSelect }: Props) {
  const oldPrice = Math.round(product.price * 1.1); // valor "de" ilustrativo (não existe no JSON)
  return (
    <article className="card">
      <button className="card__open" onClick={() => onSelect(product)} aria-label={`Ver detalhes de ${product.productName}`}>
        <img src={product.photo} alt={product.productName} loading="lazy" />
        <h3>{product.descriptionShort}</h3>
        <s>{formatPrice(oldPrice)}</s>
        <strong>{formatPrice(product.price)}</strong>
        <small>ou 2x de {formatPrice(Math.round(product.price / 2))} sem juros</small>
        <em>Frete grátis</em>
      </button>
      <button className="btn btn--blue" onClick={() => onSelect(product)}>Comprar</button>
    </article>
  );
}

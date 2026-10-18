import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/products';
import type { Product } from '../types';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchProducts(controller.signal)
      .then(setProducts)
      .catch((e: Error) => e.name !== 'AbortError' && setError(e.message))
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  return { products, loading, error };
}

import type { Product, ProductsResponse } from '../types';

const URL = '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
  

export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  const res = await fetch(URL, { signal });
  if (!res.ok) throw new Error(`Erro ao carregar produtos (${res.status})`);
  const data: ProductsResponse = await res.json();
  if (!data.success) throw new Error('A API retornou sucesso = false');
  return data.products;
}

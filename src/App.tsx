import { useState } from 'react';
import { useProducts } from './hooks/useProducts';
import type { Product } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductSection from './components/ProductSection';
import Partners from './components/Partners';
import Brands from './components/Brands';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';

export default function App() {
  const { products, loading, error } = useProducts();
  const [selected, setSelected] = useState<Product | null>(null);

  const section = { products, loading, error, onSelect: setSelected };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <ProductSection {...section} tabs={['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']} />
        <Partners />
        <ProductSection {...section} />
        <Partners />
        <Brands />
        <ProductSection {...section} />
        <Newsletter />
      </main>
      <Footer />
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

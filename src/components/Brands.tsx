import Logo from './Logo';

export default function Brands() {
  return (
    <section className="container brands" aria-labelledby="titulo-marcas">
      <h2 id="titulo-marcas">Navegue por marcas</h2>
      <ul>
        {[1, 2, 3, 4, 5].map((n) => (
          <li key={n}>
            <a href="#" aria-label={`Marca ${n}`}>
              <Logo link={false} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

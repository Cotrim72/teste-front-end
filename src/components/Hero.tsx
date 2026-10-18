export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__content">
        <h1 id="hero-title">Venha conhecer nossas promoções</h1>
        <p><strong>50% Off</strong> nos produtos</p>
        <a className="btn btn--yellow" href="#produtos">Ver produto</a>
      </div>
    </section>
  );
}

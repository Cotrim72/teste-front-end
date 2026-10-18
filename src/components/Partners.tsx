export default function Partners() {
  return (
    <section className="container partners" aria-label="Parceiros">
      {[1, 2].map((n) => (
        <article className="partner" key={n}>
          <h2>Parceiros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <a className="btn btn--yellow" href="#">Confira</a>
        </article>
      ))}
    </section>
  );
}

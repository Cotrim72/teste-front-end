import { FormEvent, useState } from 'react';

export default function Newsletter() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <section className="newsletter" aria-labelledby="titulo-news">
      <div className="container newsletter__inner">
        <div>
          <h2 id="titulo-news">Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>
        <form onSubmit={submit}>
          <input type="text" placeholder="Digite seu nome" aria-label="Seu nome" required />
          <input type="email" placeholder="Digite seu e-mail" aria-label="Seu e-mail" required />
          <button className="btn btn--yellow" type="submit">Inscrever</button>
          <label><input type="checkbox" required /> Aceito os termos e condições</label>
          {sent && <p role="status">Inscrição realizada!</p>}
        </form>
      </div>
    </section>
  );
}

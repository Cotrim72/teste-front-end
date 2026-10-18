const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

/** Recebe centavos e devolve "R$ 1.499,90" */
export const formatPrice = (cents: number) =>
  brl.format(cents / 100).replace(/\u00a0/g, ' ');

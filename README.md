# Teste Front-End Econverse

Vitrine de produtos e modal de detalhes, feitos com **React + TypeScript + Sass** (Vite), sem bibliotecas de UI.

## Como rodar

Requisitos: Node 18+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + build de produção em /dist
npm run preview   # serve o build
```

## Estrutura

```
src/
├── components/   # Header, Hero, Categories, ProductSection, ProductCard, ProductModal...
├── hooks/        # useProducts (carregamento, erro e cancelamento da requisição)
├── services/     # fetchProducts (consumo do JSON)
├── utils/        # formatPrice (centavos -> R$ 1.499,90)
├── styles/       # _variables.scss + main.scss
└── types.ts
```

## Decisões

- `price` do JSON vem em **centavos** (149990 = R$ 1.499,90).
- Modal: fecha com X, clique fora ou `Esc`; trava o scroll do body; `role="dialog"` e `aria-modal`.
- HTML semântico (`header`, `nav`, `main`, `section`, `article`, `footer`), `alt` nas imagens e meta description.
- Preço "de" e parcelas dos cards são calculados a partir do preço (não existem no JSON).

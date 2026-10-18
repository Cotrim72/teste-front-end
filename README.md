# Teste Front-End Econverse
 
Página com vitrine de produtos e modal de detalhes, baseada no layout do Figma do teste.
Feita com **React + TypeScript + Sass**, usando **Vite**, sem bibliotecas de UI.
 
## Funcionalidades
 
- Header com benefícios, busca e menu de categorias
- Hero, categorias em destaque, parceiros, marcas, newsletter e rodapé
- Vitrines de produtos com carrossel e abas, alimentadas por um JSON via `fetch`
- Modal com os dados do produto clicado (foto, nome, preço, descrição e quantidade)
- HTML semântico, `alt` nas imagens e atributos de acessibilidade
## Requisitos
 
- [Node.js](https://nodejs.org/) 18 ou superior
- npm (já vem com o Node)
Para conferir as versões instaladas:
 
```bash
node -v
npm -v
```
 
## Como rodar o projeto
 
1. Clone o repositório e entre na pasta:
```bash
   git clone <url-do-seu-repositorio>
   cd teste-front-end
```
 
2. Instale as dependências:
```bash
   npm install
```
 
3. Inicie o servidor de desenvolvimento:
```bash
   npm run dev
```
 
4. Abra o endereço mostrado no terminal (normalmente <http://localhost:5173>).
## Como compilar
 
Gera a versão de produção na pasta `dist/` (faz a checagem de tipos do TypeScript e depois o build do Vite):
 
```bash
npm run build
```
 
Para ver o resultado do build localmente:
 
```bash
npm run preview
```
 
## Como testar
 
O projeto não possui testes automatizados. A validação é feita pelas etapas abaixo.
 
**1. Checagem de tipos e build**
 
```bash
npm run build
```
 
Se o comando terminar sem erros, o TypeScript e o Sass compilaram corretamente.
 
**2. Teste manual**
 
Com `npm run dev` rodando, confira:
 
| O que testar | Resultado esperado |
|---|---|
| Carregar a página | As vitrines exibem os 9 produtos do JSON |
| Clicar em um card ou no botão **Comprar** | Abre o modal com os dados do produto clicado |
| Fechar o modal | Fecha com o **X**, clicando fora ou com a tecla **Esc** |
| Botões **−** e **+** do modal | Alteram a quantidade (mínimo 01) |
| Setas do carrossel | Rolam a lista de produtos |
| Redimensionar a janela | O layout se adapta (colunas empilham em telas menores) |
| Derrubar a requisição (DevTools → Network → Offline) | Aparece a mensagem de erro no lugar da vitrine |
 
## Estrutura do projeto
 
```
src/
├── components/     # Header, Hero, Categories, ProductSection, ProductCard,
│                   # ProductModal, Partners, Brands, Newsletter, Footer, Logo
├── hooks/          # useProducts: carregamento, erro e cancelamento da requisição
├── services/       # fetchProducts: consumo do JSON de produtos
├── utils/          # formatPrice: converte centavos em "R$ 1.499,90"
├── styles/         # _variables.scss e main.scss
├── assets/         # imagens e ícones exportados do Figma
├── types.ts        # tipos TypeScript (Product)
├── App.tsx
└── main.tsx
```

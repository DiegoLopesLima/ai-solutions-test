# AI Solutions Test

## Sobre o teste

### Por que não utilizei os componentes prontos do VeeValidade?

Apenas para demonstrar um pouco mais do uso da Composition API.

---

### Por que não utilizei um framwork de UI como o Vuetify?

Simplemente para demonstrar construção de componentes, posso utilizar qualquer framework de UI mas também posso criar meus próprios componentes quando necessário.

---

### Por que fiz o hero banner sem utilizar um componente pronto?

Sei que eu poderia ter utilizado algum componente pronto de alguma biblioteca, porém quis demonstrar como eu lidaria com isso sem um componente pronto. Assim demonstrei a preocupação em destruir timers para evitar memory leaks por exemplo.

---

### Por que utilizei apenas classes CSS do Tailwind e não adotei o uso da tag style do single file components?

Por questões de performance isso é o recomendado. Tenho conhecimento da possibilidade de utilizar @apply no caso de SCSS, porém isso gera uma perca do poder que o Tailwind disponibiliza. É possível ler mais sobre isso aqui: [https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction]

---

### Por que criei tipos como o ButtonSize com apenas uma possibilidade de valor?

Para garantir escalabilidade. No futuro se eu precisasse de um botão menor (`"sm"`) ou maior (`"lg"`) eu poderia adicionar estes tamanhos ao tipo, e os outros tipos como o usado no `sizeStylesMap` iriam reagir com erros até que eu preenchesse todo o necessário corretamente, evitando bugs e facilitando a manutenção. Essas variações não foram criadas pois não havia necessidade delas no momento então apenas impactariam negativamente na performance.

---

### O que eu fiz de interessante?

- Implementei i18n para conseguir disponibilizar todo o conteúdo estático em mais de um idioma e estruturei de uma forma escalável.
- O layout é responsívo.
- O layout é acessível.
- O HTML 5 Outline está bem estruturado.
- Os componentes são pequenos e estão bem divididos (Com um pouco mais de tempo seria possível tornar cada parte atômica).
- Utilizei Zod em conjunto com o VeeValidate para gerar schemas tipados.
- Utilizei como biblioteca de ícones um modulo para o Iconify, assim além de ser possível utilizar ícones de diversas libs, é possível utilizar a extensão `Iconify IntelliSense do VSCode` para ganhar produtividade com a pré-visualização de ícones e o auto completar. Isso também facilita o uso de ícones que mudam condicionalmente.
- Tentei fazer commits bem estruturados e seguindo padrões modernos de escrita.
- Apesar de eu ter trabalhado sozinho, tentei seguir dentro do possível um Git Flow, sempre criando feature branches, pull requests e fazendo pelo menos um self code review para a branch main ao invés de commits diretos.
- Utilizei ESLint e Prettier para garantir a legibilidade e o padrão do código.
- Utilizei um módulo do Nuxt 3 para utilizar o CDN do Google Fonts.

---

### O que eu teria feito com mais tempo?

- Testes unitários para os componentes.
- Animações CSS para dar mais fluidez ao layout.
- Implementação de microformats para melhorar o SEO.
- Ajustes no contraste de cores para tornar mais acessível para dautônicos ou pessoas com dificuldades visuais.
- Implementar um móduto para melhorar a performance das imagens grandes como a do hero banner.
- Um dropdown para alternar entre os idiomas disponíveis.
- Criaria um layout com o cabeçalho e rodapé para reaproveitar em mais rotas para um detalhamento dos produtos por exemplo.
- Implementaria um mapa estático com a API do Google Maps para o endereço.
- Implementaria um WYSIWYG para o campo de mensagem na parte de contato para que o usuário pudesse formatar a mensagem.
- Adicionaria a possibilidade de incluir anexo nas mensagens de contato.
- Enviaria cada Pull Request para code review.
- Implementaria o Husky para evitar que commits fora de padrão fossem enviados.

---

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

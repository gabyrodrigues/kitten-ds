<p align="center">
  <img src="https://raw.githubusercontent.com/gabyrodrigues/kitten-ds/main/docs/logo.svg" alt="Kitten DS logo" height="120">
</p>

# 🐾 Kitten DS

**Kitten DS** é um *design system* acessível, focado na criação de interfaces amigáveis e fáceis de usar. Ele combina a flexibilidade de um *UI kit* com a estrutura de um *design system* completo, integrado a uma biblioteca de componentes, fundações de design com *tokens* e variáveis customizáveis, além de testes e documentação interativa — oferecendo uma experiência fluida e agradável para todos os usuários. Seus componentes foram desenvolvidos e testados em conformidade com as [Diretrizes WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/).

## ⚙️ Pré-requisitos

Antes de instalar o **Kitten DS**, você precisa ter:

- Conhecimento básico em **JavaScript**, **React**, **CSS** e familiaridade com **Tailwind CSS**;
- Instalado em sua máquina:
  - [Node.js](https://nodejs.org);
  - [npm](https://www.npmjs.com), [pnpm](https://pnpm.io) ou [yarn](https://yarnpkg.com) como gerenciador de pacotes;
  - Um projeto React configurado (pode ser criado com [Vite](https://vitejs.dev), [Next.js](https://nextjs.org) ou outro framework).

## 📦 Instalação

Instale o Kitten DS com o gerenciador de pacotes da sua escolha:

### Usando `npm`:

```bash
npm install kitten-ds
```
### Usando `pnpm`:

```bash
pnpm install kitten-ds
```

### Usando `yarn`:

```bash
yarn add kitten-ds
```

## 🎨 Integração com Tailwind CSS e *Tokens* de design

O **Kitten DS** utiliza o Tailwind CSS (versão 4) como base para estilização e oferece um sistema de *tokens* CSS que garantem consistência e fácil personalização visual.

Durante a fase de prototipação do *design system*, esses *tokens* foram definidos com foco em critérios de acessibilidade (como contraste adequado, legibilidade e foco visível) e experiência do usuário. Eles são aplicados globalmente aos componentes do **Kitten DS**, criando uma base visual consistente.

### 🎯 Customização via *Tokens* CSS

Esses *tokens* são variáveis CSS customizadas e podem ser sobrescritos diretamente no seu CSS global para adaptar o Kitten DS ao branding e às necessidades do seu projeto — sem a necessidade de alterar a biblioteca.

Por exemplo, os *tokens* padrão incluem:

```css
--color-primary: var(--color-brand-purple-800);
--color-primary-hover: var(--color-brand-purple-900);
--color-primary-highlight: var(--color-brand-purple-100);

--shadow-level1: 0px 0px 4px 0px rgba(33, 33, 33, 0.16);
--shadow-level2: 0px 2px 4px 0px rgba(33, 33, 33, 0.16);
--shadow-level3: 0px 4px 8px 0px rgba(33, 33, 33, 0.16);

--color-typography-primary: var(--color-neutral-800);
--color-typography-secondary: var(--color-neutral-600);
--color-typography-inverted: var(--color-neutral-100);
--color-typography-disabled: var(--color-neutral-500);
```

Se quiser alterar a paleta, por exemplo, basta definir novos valores no seu CSS global:

```css
  @theme {
    --color-primary: var(--color-brand-blue-700);
    --color-primary-hover: var(--color-brand-blue-800);
    --color-primary-highlight: var(--color-brand-blue-100);

    --shadow-level1: 0px 1px 4px rgba(0, 0, 0, 0.12);
  }
```

✔️ Dessa forma, você tem liberdade para ajustar cores, sombras, tipografia e outros aspectos visuais, mantendo a consistência e acessibilidade que fazem parte do DNA do **Kitten DS**.

⚠️🔧 Importante: Embora seja possível sobrescrever qualquer *token*, recomendamos sempre validar alterações com ferramentas de acessibilidade para garantir contraste, legibilidade e foco, respeitando as diretrizes WCAG.

### 🚀 Dependência do Tailwind CSS

O **Kitten DS** tem Tailwind CSS como dependência para seu funcionamento. Certifique-se de que seu projeto React está com o Tailwind CSS (versão 4) corretamente configurado.

Se ainda não configurou, siga o guia oficial de instalação do Tailwind:

[https://tailwindcss.com/docs/installation/framework-guides](https://tailwindcss.com/docs/installation/framework-guides)

## ⚛️ Uso básico em React

Após a instalação, importe os componentes do **Kitten DS** diretamente em seus arquivos React. Por exemplo:

```javascript
import { Button } from "kitten-ds"
function App() {
  return (
    <div>
      <Button>Clique aqui</Button>
    </div>
  );
}
export default App;
```

## ♿ Acessibilidade

O **Kitten DS** é desenvolvido com foco em acessibilidade, seguindo as Diretrizes de Acessibilidade para Conteúdo Web (WCAG), incluindo:

- Foco visível e navegável por teclado;
- Contraste adequado entre texto e fundo;
- Tamanho mínimo recomendado para áreas de toque.

## 🖌️ Design

O **Kitten DS** conta com um **UI Kit** desenvolvido no Figma como parte integrante do *design system*. Ele reúne todos os fundamentos visuais e componentes prontos para uso, servindo como ponto inicial para criação de interfaces consistentes e acessíveis.

Os *tokens* documentados no Figma correspondem exatamente aos utilizados na biblioteca de componentes, garantindo confiabilidade e consistência entre design e desenvolvimento.

Você pode duplicar o arquivo para sua conta ou salvá-lo como biblioteca no Figma. Acesse o arquivo diretamente aqui: [Figma Kitten DS](https://www.figma.com/community/file/1497783419530927373).

> 📚 Para consultar a documentação detalhada dos componentes e exemplos de uso, acesse o guia interativo no Storybook: [Storybook Kitten DS](https://kitten-ds.vercel.app/).

## 📖 Biblioteca de componentes

O **Kitten DS** inclui uma biblioteca de componentes reutilizáveis, todos previamente projetados e testados no **UI Kit do Figma** para garantir consistência visual e funcionalidade. Esses componentes podem ser integrados facilmente em projetos React, acelerando a criação de interfaces acessíveis e consistentes.

Acesse a biblioteca de componentes diretamente aqui: [Biblioteca Kitten DS](https://www.npmjs.com/package/kitten-ds).

## 🤝 Contribuindo

Contribuições são bem-vindas!
Sinta-se à vontade para abrir uma issue, sugerir melhorias ou enviar um pull request.

## ❤️🐱 Sobre o Kitten DS

- *Design system* acessível e amigável;
- Componentes reutilizáveis e responsivos;
- Personalização via *tokens* de design;
- Integração com Storybook para documentação e testes;
- Testes de acessibilidade e usabilidade.

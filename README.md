# Rolé Aleatório
-----------
## 🧾 Sobre
<p align="justify"> App de turismo com finalidade de demonstrar locais e suas informações de maneira simples e eficiente.</p>

### 🛠 Tecnologias

- [React](https://pt-br.reactjs.org)
- [React Native](https://reactnative.dev)
- [React Navigator](https://reactnavigation.org)
- [Typescript](https://www.typescriptlang.org)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Expo](https://expo.dev)

### 🚀 Como rodar a aplicação

<p align="justify">Para clonar e rodar essa aplicação, você precisará de <a href="https://git-scm.com" target="_blank">Git</a>, <a href="https://nodejs.org/en/" target="_blank">Npm</a>, <a href="https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable" target="_blank">Yarn</a> (Opcional). É importante também que tenha um editor de texto instalado no computador, como o <a href="https://code.visualstudio.com" target="_blank">VS Code</a>.</p>

```
# Clone o repositório
$ git clone <https://github.com/cainamagoncalves/role-aleatorio-frontend.git>

# Vá até a pasta role-aleatorio-frontend
$ cd role-aleatorio-frontend

# Instale as dependências
$ yarn add ou npm install

# Rode o aplicativo (Mobile)
$ expo start

# O aplicativo poderá rodar através de seu dispositivo celular, utilizando o aplicativo do expo, ou através da web, com o emulador disponibilizado pelo expo também.

```

No projeto, foi utilizada uma bilblioteca que faz o uso de um Componente mais antigo do React Native. Desta forma, após realizar o procedimento de instalação, é importante que acesse as pastas listadas a seguir e remova a importação de 
```
import {..., ViewPropTypes} from "react-native";
```
Para

```
import {...} from "react-native";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
```

node_modules/react-native-snap-carousel/src/carousel/Carousel.js
node_modules/react-native-snap-carousel/src/pagination/Pagination.js
node_modules/react-native-snap-carousel/src/pagination/PaginationDot.js
node_modules/react-native-snap-carousel/src/parallaximage/ParallaxImage.js
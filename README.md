# Desafio React Native

Para este desafío se solicita consumir una API de clima hecha en graphql. Se deberá mostrar el listado de ciudades indicadas en un array inicial, y al presionar en una, mostrar un detalle más amplio para cada una.

# Tecnologías implementadas

- React Native con Expo
- Typescript
- GraphQL con ApolloClient
- Styled Components
- GH Actions (CI/CD)
- Eslint, Prettier & Husky (Linting)
- Jest & Testing Library (Tests)

> Demo: https://expo.dev/@ciscodev/ank-challenge

# Requerimientos mínimos

- Usar typescript

- Usar un cliente de graphql para buscar localidades y mostrar su respectivo clima desde la API https://graphql-weather-api.herokuapp.com/.

> El array inicial de localidades está declarado aca [./src/constants](./src/constants.js)

- Cada elemento debe mostrar el nombre de la ciudad, el icono segun el el estado del clima, y la temperatura actual.

> Para obtener el icono, se debe consultar la siguiente url: `http://openweathermap.org/img/wn/10d@2x.png`, donde "10d" es el id del icono.

- Al presionar en una ciudad, deberemos navegar a otra pantalla donde se mostrará un detalle más amplio. Por ejemplo, podremos detallar la fecha, la temperatura máxima y mínima, las coordinadas, y cualquier otro dato que consideremos relevante.

- Crear componentes reutilizables. Deben ser componentes funcionales y se apreciará el uso de hooks.

- Que funcione en al menos una plataforma (ios | android)

## Requerimientos Deseables

- Implementar al menos un test unitario.

- Interfaz estetica

- Buscar localidades nuevas y poder guardarlas como favoritas (usando AsyncStorage y concatenandolas al array inicial).

- Se tendrán en cuenta buenas prácticas

- Se valorará cualquier funcionalidad extra que se quiera agregar.

## Sugerencias

Usar apollo y styled-componentes.

## Dependencias proyecto base

```json
{
  "dependencies": {
    "@expo/vector-icons": "^10.0.0",
    "@react-native-community/masked-view": "0.1.10",
    "@react-navigation/bottom-tabs": "^5.8.0",
    "@react-navigation/drawer": "^5.9.0",
    "@react-navigation/material-bottom-tabs": "^5.2.16",
    "@react-navigation/material-top-tabs": "^5.2.16",
    "@react-navigation/native": "5.9.3",
    "@react-navigation/stack": "5.14.3",
    "@types/react": "16.8.0",
    "apollo-boost": "*",
    "apollo-client": "2.6.4",
    "graphql": "15.0.0",
    "react-apollo": "*",
    "react-is": "^16.8.0",
    "react-native-gesture-handler": "~1.7.0",
    "react-native-paper": "3.6.0",
    "react-native-reanimated": "~1.13.0",
    "react-native-safe-area-context": "3.1.4",
    "react-native-screens": "~2.10.1",
    "react-native-tab-view": "^2.0.0",
    "styled-components": "5.2.3",
    "styled-components/native": "*",
    "subscriptions-transport-ws": "0.9.0"
  }
}
```

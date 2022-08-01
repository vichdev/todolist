import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --background: #FFFDFA;
  --red: #b12025;
  --text: #333333;
}
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;
  }
html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}
body {
  font-family: 'Cormorant SC', serif;
  background: var(--background);
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}
input,
button,
textarea {
  font: 400 18px Roboto, sans-serif;
}
button,
svg {
  cursor: pointer;
}
`;

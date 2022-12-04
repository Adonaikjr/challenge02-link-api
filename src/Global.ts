import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

}

:focus{
    outline: 0;
}
body {
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    max-width: 1440px;
    min-width: 375px;
    margin: 0 auto;
    padding: 0 auto;
}
button {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
}
`

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
}
button {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
}
`

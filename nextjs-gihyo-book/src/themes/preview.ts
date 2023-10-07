import { createGlobalStyle } from "styled-components"

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        mathers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
}



export const GlobalStyle = createGlobalStyle`
    html,
    body,
    textarea {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        transition: .25s;
        color: #000000;
    }   
`


import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --main-color: #CF3031;
        --text-color: #333;
    }
    html, body, #root {
    height: 100%;
    }
    #root {
        display: flex;
        flex-direction: column;
    }
    #root > main {
        flex: 1;
    }
    body{
        color: var(--text-color);
        font-family: 'Roboto', sans-serif;
    }

    .offcanvas-start{
        padding: 25px 45px;
        border-right: none;
        width: 100%;
    }
`
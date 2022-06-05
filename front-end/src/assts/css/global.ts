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

    body::-webkit-scrollbar {
        width: 10px;
        background: #f4f4f4; 
    }

    body::-webkit-scrollbar-track {
        background: #f4f4f4;   
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--main-color); 
        border-radius: 10px;
    }
    a{
        color: var(--main-color);
        font-weight: 500;
        text-decoration: none;
    }

    .offcanvas-start{
        padding: 25px 45px;
        border-right: none;
        max-width: 100%;
    }

    #offcanvasNavbar-expand-lg{
        @media (min-width: 992px){
            padding: 0;
        }
    }
    
    .active{
        color: #fff;
        background-color: var(--main-color) !important;
        border-color: var(--main-color) !important;
    }

    .active:hover {
        background-color: #E35556 !important;
        border: #E35556 1px solid !important;
    }
    
    .form-check-input.is-valid:checked{
        border-color: #198754;
    }
`
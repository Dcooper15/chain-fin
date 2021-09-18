import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    name: 'light',
    body: '#ebebeb',
    fontColor: '#146175',
    headerColor: '#146175',
   
    
    
}

export const darkTheme = {
    name: 'dark',
    body: '#343434',
    fontColor: '#d4af37',
    headerColor: '#d4af37',
   
}

export const GlobalBackGround = createGlobalStyle`
body {
background-color: ${(props) => props.theme.body}
}
`

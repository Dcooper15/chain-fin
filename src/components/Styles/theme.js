import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    name: 'light',
    body: '#ebebeb',
    accentColor: '#00afc9',
    fontColor: '#146175',
    headerColor: '#146175',
    dataLineColor: '#146175',
    percentChangeUp: '#006400',
    percentChangeDown: '#ff4c4c'
   
    
    
}

export const darkTheme = {
    name: 'dark',
    body: '#343434',
    accentColor: '#d4af37',
    fontColor: '#d4af37',
    headerColor: '#d4af37',
    dataLineColor: '#756300',
    percentChangeUp: '#a4de02',
    percentChangeDown: '#ff4c4c'
   
}

export const GlobalBackGround = createGlobalStyle`
body {
background-color: ${(props) => props.theme.body}
}
`

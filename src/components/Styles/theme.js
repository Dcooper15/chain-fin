import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#ebebeb',
    fontColor: '#002B36'
    
    
}

export const darkTheme = {
    body: '#343434',
    fontColor: '#d4af37'
}

export const GlobalBackGround = createGlobalStyle`
body {
background-color: ${(props) => props.theme.body}
}
`
// export const ColumnRight = styled.div`
// flex: 1;
// justify-content: center;
// align-items: flex-end;
// flex-direction: column;
// border-color: ${(props) => props.theme.fontColor}; 
// border-style: groove;
// border-radius: 20px;
// border-width: 1px;
// margin-top: 2%;
// margin-bottom: 1%;
// text-decoration: none;
// `;
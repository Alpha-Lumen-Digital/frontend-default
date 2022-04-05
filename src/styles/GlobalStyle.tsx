import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  *::-webkit-scrollbar {
    width: 12px;
    background-color: #bbb;
  }

  *::-webkit-scrollbar-track {  
    margin: 0;
    border-radius: 5px;
  }

  *::-webkit-scrollbar-thumb {
      background-color: #9FD1C2;
      border-radius: 2px;

  }

  *::-webkit-scrollbar-button {
      height: 0;
  }

  ul{
    list-style: none;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    overflow-x: hidden;
  }

  #root{
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`

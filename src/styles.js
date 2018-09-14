import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  .wrapAll{
    max-width:800px;
    margin:0 auto;
    padding:0 20px 20px 20px;
    position:relative;
  }
  .searchIcon{
    position: absolute;
    top: 35px;
    right: 18px;
    color:#303f9f;
  }
  .cryptoItem{
    margin:0;
    padding:20px 0;
    text-align:center;
  }
  .cryptoSymbol{
    fontSize:26px;
    font-size:26px;
  }
  .cryptoPrice{
    color:#303f9f;
    font-size:16px;
  }
`
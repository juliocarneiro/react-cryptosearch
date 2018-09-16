import React, {Component} from 'react'
import axios from 'axios'

import './styles.js'

import Loader from './Loader.js'
import Search from './Search.js'

export default class App extends Component {
  state = {
    cryptos: [],
    isLoading:true,
    search:''
  }

  componentDidMount() {
    axios.get(`https://api.coinmarketcap.com/v1/ticker/`)
    .then(res => {
      const cryptos = res.data;
      this.setState({ cryptos, isLoading:false });
    }).catch(error => {
      console.log('Erro ao puxar os dados.', error);
    });
  }

  searchHandler(event){
    this.setState({ search: event.target.value })
  }

  render() {
    const {cryptos, isLoading} = this.state
    return (
      <div className="wrapAll">
        {
          isLoading ? <Loader color="#303f9f" title="Carregando..."/> 
          : 
          <Search 
            cryptos={cryptos}
            searchHandler={this.searchHandler.bind(this)}
            search={this.state.search}
          />
        }
      </div>
    )
  }
}
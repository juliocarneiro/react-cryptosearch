import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './styles.js'

import Loader from './Loader.js'
import Search from './Search.js'

export default class App extends Component {
  state = {
    cryptos: [],
    isLoading:true,
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

  render() {
    const {cryptos, isLoading} = this.state
    return (
      <div className="wrapAll">
        {isLoading ? <Loader color="#303f9f" title="Carregando..."/> : <Search cryptos={cryptos} />}
      </div>
    )
  }
}

App.Proptypes = {
  cryptos: PropTypes.array,
  isLoading:PropTypes.bool
}  
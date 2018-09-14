import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';

import { Grid, Paper, Icon, TextField } from '@material-ui/core';

export default class Search extends Component {
  state = {
    search:''
  }
  searchHandler(event){
    this.setState({ search: event.target.value })
  }
  render() {
    let filteredSearch = this.props.cryptos.filter((crypto) => {
      return crypto.symbol.indexOf(this.state.search.toUpperCase()) !== -1;
    })
    return (
      <Fragment>
        <Grid className='animated fadeIn wrapAll'>
          <Grid 
            container
            direction="row"
            spacing={24}
          >
            <Grid item xs={12}>
              <Icon className="searchIcon">search</Icon>
                <TextField
                  label="Busca"
                  placeholder="Pesquise pelo código alfabético..."
                  margin="normal"
                  onChange={this.searchHandler.bind(this)}
                  value={this.state.search}
                  fullWidth
                />
            </Grid>
            <Grid item xs={12}>
              <h1>Criptomoedas:</h1>
            </Grid>
            { 
              filteredSearch.map(crypto =>
                <Grid item xs={6} lg={3} sm={4} key={crypto.id}>
                  <Paper className="cryptoItem">
                    <span className="cryptoSymbol">{crypto.symbol}</span><br />
                    <span className="cryptoPrice">${crypto.price_usd}</span>
                  </Paper>
                </Grid>
              )
            }
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}
Search.Proptypes = {
  search: PropTypes.string,
}  
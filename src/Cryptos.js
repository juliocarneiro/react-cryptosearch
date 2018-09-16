import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import { Grid, Paper } from '@material-ui/core';

const Cryptos = (props) => {
  const {search, cryptos} = props;

  let filteredSearch = cryptos.filter((crypto) => {
    return crypto.symbol.indexOf(search.toUpperCase()) !== -1;
  })
  
  return (
    <Fragment>
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
    </Fragment>
  )
}
Cryptos.propTypes = {
  cryptos: propTypes.array.isRequired,
  search: propTypes.string.isRequired
}
export default Cryptos
import React, { Fragment } from 'react'
import propTypes from 'prop-types'

import { Grid, Icon, TextField } from '@material-ui/core'
import Cryptos from './Cryptos'

const Search = (props) => {
  const {search, cryptos, searchHandler} = props
  
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
              onChange={searchHandler}
               value={search}
                fullWidth
              />
          </Grid>
          <Grid item xs={12}>
            <h1>Criptomoedas:</h1>
          </Grid>
          <Cryptos cryptos={cryptos} search={search}/>
        </Grid>
      </Grid>
    </Fragment>
  )
}
Search.propTypes = {
  cryptos: propTypes.array.isRequired,
  search: propTypes.string.isRequired
}
export default Search
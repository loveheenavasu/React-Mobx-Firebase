import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Header =() => {
    return (
        <div>
            <AppBar>
        <Toolbar>
          <Typography variant="h6">Car Showroom</Typography>
        </Toolbar>
      </AppBar>
        </div>
    )
}
export default  Header
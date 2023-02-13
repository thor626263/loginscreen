import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EastIcon from '@mui/icons-material/East';



const theme = createTheme();

export default function Forms() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <p style={{marginBottom : "0px"}}>Enter your email:</p>
            <TextField style={{marginTop : "3px"}}
              
            //   required
              fullWidth
              id="email"
              label="denetex09@gmail.com"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <p style={{marginBottom : "0px", marginTop : "9px"}}>Password:</p>
            <TextField style={{marginTop : "3px"}}
              
            //   required
              fullWidth
              name="password"
              label="************"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button style={{marginTop : "15px",backgroundColor : "#7BC362",   fontFamily: "sans-serif"}}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login &nbsp; <EastIcon/>
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{marginLeft : "105px", color:"#142213"}}>
                 Forgot password?
                </Link>
              </Grid>
              
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}

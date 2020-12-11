import React from 'react'
import Layout from "../components/layout"
import {Link} from "gatsby"

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green,white } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
      margin: {
        margin: theme.spacing(1),
        color: "white",
        fontSize: "20px",
      },
    }));

    const theme = createMuiTheme({
      palette: {
        primary: green,
      },
    });

export default () => {
      const classes = useStyles();
      return (
            <Layout>
                  <section className="content">
                        <section className="container">
                              <h1 className="bar">
                                    Contact
                              </h1>
                              <div className="contact">
                                    <h2>お問い合わせはこちらのチャットボットからお願いします</h2>
                                    <ThemeProvider theme={theme}>
                                          <Button variant="contained" color="primary" size="large" className={classes.margin}>
                                          <Link to="https://chatbot-4ad3e.web.app/">
                                                お問い合わせをする
                                          </Link>
                                          </Button>
                                    </ThemeProvider>
                              </div>
                        </section>
                  </section>
            </Layout>
      )
}

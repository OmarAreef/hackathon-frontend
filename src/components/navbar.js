import React from 'react'
import Custombutton from './custombutton'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import { Link } from 'react-router-dom';

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    },
    mlAuto: {
        marginLeft:"auto",
        textDecoration:"None"
    },

})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                <img src={logoMobile} className={classes.logoMobile}/> 
                <Typography variant="h6"  className={classes.mlAuto}>
                    <Link to='/result' className={classes.mlAuto}> Are you a Lab ? </Link>
                   
                </Typography>
                {/* <Typography variant="h6" className={classes.menuItem}>
                    Blog
                </Typography> */}
                <Typography variant="h6" >
                    Careers
                </Typography>
                {/* <Typography variant="h6" className={classes.menuItem}>
                    Demos 
                </Typography> */}
                <Typography variant="h6" >
                    Contact Us 
                </Typography>
            </Toolbar>
    )
}

export default NavBar
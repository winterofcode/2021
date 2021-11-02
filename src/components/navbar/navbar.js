import React, {useState, useEffect} from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import SortIcon from '@mui/icons-material/Sort';
import { Link as RouterLink } from "react-router-dom";
import logo from '../../images/org-logo.png';
import { headersData, UseStyles } from "./navbardata";


export default function Navbar() {
  const {appbar, icon, logoTitle, logoimg, toolbarWrapper, menuButton, drawerContainer} = UseStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });



  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbarWrapper}>
        <img src={logo} className={logoimg} alt="winter of code logo" />
        <h1 className={logoTitle}>
          <a 
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
              href="/">Winter of Code</a>
        </h1>
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <img src={logo} className={logoimg} alt="winter of code logo" />
        <h1 className={logoTitle}>
          <a 
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
              href="/">Winter of Code</a></h1>
        <IconButton 
          {...{
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <SortIcon className={icon}/>
        </IconButton>

        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            // component: RouterLink,
            // to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem><a style={{textDecoration: "none", color: "black"}} href={href}>{label}</a></MenuItem>
        </Link>
      );
    });
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            // to: href,
            // component: RouterLink,
            className: menuButton,
          }}
        >
          <a style={{textDecoration: "none", color: "white"}} href={href}>{label}</a>
        </Button>
      );
    });
  };

  return (
    <AppBar className={appbar} elevation={0}>
      {mobileView ? displayMobile() : displayDesktop()}  
    </AppBar>
  )
}
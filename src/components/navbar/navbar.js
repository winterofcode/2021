import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// import { height } from "@mui/system";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import logo from '../../images/org-logo.png';

const headersData = [
  {
    label: "GDSC NSEC",
    href: "https://dscnsec.com/",
  },
  {
    label: "Mentors",
    href: "/mentors",
  },
  {
    label: "Organizers",
    href: "/organizers",
  },
  {
    label: "Organizations",
    href: "/organizations",
  },
  {
    label: "Contact Us",
    href: "/contactus",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#001D3D",
    paddingRight: "79px",
    paddingLeft: "250px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logotext: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFF",
    textAlign: "left",
  },
  logoimg: {
    width: "45px",
    height: "45px",
  },
  logoimgplace: {
    marginRight: "0.5%",
    float: "left",
  },
  logotextplace: {
    marginRight: "0.5%",
    float: "left",
  },
  menuplace: {
    marginLeft: "30%",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    // justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Navbar() {
  const { header, logotext, logoimg, logoimgplace, menuplace, logotextplace, menuButton, toolbar, drawerContainer } = useStyles();

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
      <Toolbar className={toolbar}>
        <div className={logoimgplace}>
          {WinterofCodeLogo}
        </div>
        <div className={logotextplace}>
          {WinterofCode}
        </div>
        <div className={menuplace}>
          {getMenuButtons()}
        </div>
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
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div>{WinterofCodeLogo}</div>
        <div>{WinterofCode}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const WinterofCodeLogo = (
    <div>
      <img src={logo} className={logoimg} alt="winter of code logo" />
    </div>
  )

  const WinterofCode = (
    <Typography variant="h6" component="h1" className={logotext}>
      Winter of Code
    </Typography>
  );


  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
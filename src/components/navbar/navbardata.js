import { makeStyles } from '@material-ui/core';

export const headersData = [
    {
      label: "GDSC NSEC",
      href: "https://dscnsec.com/",
    },
    // {
    //   label: "About Us",
    //   href: "#about",
    // },
    // {
    //   label: "Mentors",
    //   href: "/mentors",
    // },
    {
      label: "Team",
      href: "/organisers",
    },
    {
      label: "Organisations",
      href: "#organisations",
    },
    {
      label: "Faq",
      href: "#faq",
    },
    {
      label: "Contact Us",
      href: "#contact",
    },
  ];
  
export const UseStyles = makeStyles((theme) => ({
    appbar: {
      backgroundColor: '#000814',
      // background: "none",
      // height: '12%',
    },
    toolbarWrapper: {
      width: '80%',
      margin: '0 auto',
      '@media (max-width: 1024px)': {
        width: "100%",
        margin: "0 auto",
        fontSize: "0.8rem"
      },
    },
    logoTitle: {
      fontFamily: "Open Sans, sans-serif",
      color: '#fff',
      flexGrow: '1',
      '@media (max-width: 320px)': {
        width: "100%",
        margin: "0 auto",
        fontSize: "1.3rem"
      }
    },
    icon: {
      color: '#fff',
      fontSize: '2rem',
    },
    logoimg: {
      width: "45px",
      height: "45px",
      padding: "5px",
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
      textTransform: "none",
      '&:hover': {
        backgroundColor: "#1976d2"
      }
    },
    drawerContainer: {
      padding: "20px 30px",
    },
  }))
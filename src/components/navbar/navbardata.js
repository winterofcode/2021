import { makeStyles } from '@material-ui/core';

export const headersData = [
    {
      label: "GDSC NSEC",
      href: "https://dscnsec.com/",
    },
    {
      label: "About Us",
      href: "#about",
    },
    // {
    //   label: "Mentors",
    //   href: "/mentors",
    // },
    {
      label: "Organisers",
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
    },
    logoTitle: {
      fontFamily: "Open Sans, sans-serif",
      color: '#fff',
      flexGrow: '1',
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
    },
    drawerContainer: {
      padding: "20px 30px",
    },
  }))
import { makeStyles } from '@material-ui/core';

export const headersData = [
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
  
export const UseStyles = makeStyles((theme) => ({
    appbar: {
      backgroundColor: '#000814',
      height: '8%'
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
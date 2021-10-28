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
  
export const useStyles = makeStyles(() => ({
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
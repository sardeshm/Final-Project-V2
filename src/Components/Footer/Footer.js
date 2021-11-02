import React from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
//import { Container } from "@mui/material";
//import { Grid } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactsIcon from "@mui/icons-material/Contacts";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./footer.css";
import { Button } from "@mui/material";

const Footer = () => {
  const [value, setValue] = React.useState(0);

  let history = useHistory();
  const redirect = (path) => {
    history.push(path);
  };
  return (
    <div className="footer">
      <Box sx={{ width: 900 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <div onClick={() => redirect("../AboutUs")}>
            <BottomNavigationAction icon={<PermIdentityIcon />} />
          </div>
          <Button color="inherit" onClick={() => redirect("../Contact")}>
            <BottomNavigationAction icon={<ContactsIcon />} />
          </Button>
          <BottomNavigationAction icon={<InstagramIcon />} />
          <BottomNavigationAction icon={<TwitterIcon />} />
          <BottomNavigationAction icon={<FacebookIcon />} />
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
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
//import { Button } from "@mui/material";

const Footer = () => {
  const [value, setValue] = useState(0);

  let history = useHistory();
  const redirect = (path) => {
    history.push(path);
  };
  return (
    <div className="footer">
      <Box sx={{ width: 900 }}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <div onClick={() => redirect("../AboutUs")}>
            <BottomNavigationAction
              label="About"
              value="about"
              icon={<PermIdentityIcon />}
            />
          </div>
          <div color="inherit" onClick={() => redirect("../Contact")}>
            <BottomNavigationAction
              label="contact"
              value="contact"
              icon={<ContactsIcon />}
            />
          </div>
          <div
            onClick={() =>
              window.open("https://www.instagram.com/accounts/login/", "_blank")
            }
          >
            <BottomNavigationAction
              label="Insta"
              value="insta"
              icon={<InstagramIcon />}
            />
          </div>
          <div onClick={() => window.open("https://twitter.com/", "_blank")}>
            <BottomNavigationAction
              label="Twiter"
              value="twiter"
              icon={<TwitterIcon />}
            />
          </div>
          <div
            onClick={() => window.open("https://www.facebook.com/", "_blank")}
          >
            <BottomNavigationAction
              label="Facebook"
              value="facebook"
              icon={<FacebookIcon />}
            />
          </div>
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default Footer;

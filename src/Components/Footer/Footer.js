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
      <Box sx={{ width: 900, backgroundColor: "lawngreen" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <div>
            <Button color="secondary" onClick={() => redirect("../AboutUs")}>
              <BottomNavigationAction
                label="AboutUs"
                icon={<PermIdentityIcon />}
              />
            </Button>
            <Button color="inherit" onClick={() => redirect("../Contact")}>
              <BottomNavigationAction
                label="MessageUs"
                icon={<ContactsIcon />}
              />
            </Button>
          </div>
          <div className="social-icon">
            <BottomNavigationAction
              label="Insta"
              icon={<InstagramIcon color="black" />}
            />
            <BottomNavigationAction label="Insta" icon={<TwitterIcon />} />

            <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
          </div>
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default Footer;

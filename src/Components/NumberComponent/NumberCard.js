import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import "./numbercard.css";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const NumberCard = ({ number }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography
              fontSize="4rem"
              align="center"
              className="number"
              variant="body2"
              color="text.secondary"
            >
              {number.MarathiNumber}
            </Typography>
            <Typography
              paragraph
              fontSize="2rem"
              align="center"
              className="name"
            >
              {number.MarathiPronunciation}
            </Typography>
          </CardContent>

          <CardActions disableSpacing className="cardaction1">
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent className="cardcontent2">
              <Typography align="center" fontSize="3rem">
                {number.EnglishNumber}
              </Typography>

              <Typography align="center" fontSize="2rem" paragraph>
                {number.EnglishPronunciation}
              </Typography>
              <Typography align="center" fontSize="3rem">
                {number.GermanNumber}
              </Typography>
              <Typography paragraph align="center" fontSize="2rem">
                {number.GermanPronunciation}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
};

export default NumberCard;

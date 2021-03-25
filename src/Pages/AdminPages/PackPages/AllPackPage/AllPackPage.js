import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function AllPackPage() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      className="col-md-12"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <Card className="col-md-3">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PmBaIRjePqu3rPx5SyhEjfCauEBLkpYPpgfgR12LLeqDOP3yr4zMuv_U8UsuPvWFjxo&usqp=CAU"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: "#03a9cb", fontWeight: "bold" }}
            >
              BASIC PACK
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widessssss ssdd ss ssss sdsddssdqd ddd ssdssd
              dsdsfsdsdddssdd sqm;dmqs;dq;dsqldsql
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <div className={classes.root}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    className={classes.heading}
                    style={{ color: "#044b82", fontWeight: "bold" }}
                  >
                    En savoir plus
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.df
                    dffdsfsdfs fdssfdddd
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Button>
        </CardActions>
      </Card>

      <Card className="col-md-3">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1541256942802-7b29531f0df8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&w=1000&q=80"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: "#03a9cb", fontWeight: "bold" }}
            >
              PREMIUM PACK
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarcticadddd
              dssdsq sdfsfds dfssfsd sdqlksnldldq dqs dsqdsqdskd sdpkdsqksdqlsd
              kdmsdmssmsmsmss
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <div className={classes.root}>
              <Accordion
                expanded={expanded === "panel111"}
                onChange={handleChange("panel111")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    className={classes.heading}
                    style={{ color: "#044b82", fontWeight: "bold" }}
                  >
                    En savoir plus
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Button>
        </CardActions>
      </Card>

      <Card className="col-md-3">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://media.architecturaldigest.com/photos/5ba551bb44966b64d8d5fc2b/16:9/w_2560%2Cc_limit/hyper-blue-4.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: "#03a9cb", fontWeight: "bold" }}
            >
              MASTER PACK
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarcticadddd
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <div className={classes.root}>
              <Accordion
                expanded={expanded === "panel1111"}
                onChange={handleChange("panel1111")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    className={classes.heading}
                    style={{ color: "#044b82", fontWeight: "bold" }}
                  >
                    En savoir plus
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

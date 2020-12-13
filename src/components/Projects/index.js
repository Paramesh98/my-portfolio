import React from "react";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ReactIcon from "../../assets/react.svg";
import Firebase from "../../assets/firebase.svg";
import Mongdb from "../../assets/mongodb.svg";
import ReactNative from "../../assets/reactNative.svg";
import Redux from "../../assets/redux.svg";
import BeachResort from "../../assets/beach-resort.png";
import MobileApp from "../../assets/mobile-app.png";
import WaterBottle from "../../assets/water-bottle.png";
import Covid from "../../assets/covidtracker.png";
import Budget from "../../assets/budget-calculator.png";
import ImageGallery from "../../assets/image-gallery.png";

import "./styles.css";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

// const faces = [
//   "http://i.pravatar.cc/300?img=1",
//   "http://i.pravatar.cc/300?img=2",
//   "http://i.pravatar.cc/300?img=3",
//   "http://i.pravatar.cc/300?img=4",
// ];

const faces = [ReactIcon, Firebase, Mongdb, ReactNative, Redux];
const projects = [
  {
    title: "Beach Resort",
    message: "Beach Resort website made with reactjs",
    image: BeachResort,
    madeWith: ["react"],
    link: ""
  },
  {
    title: "Mobile Ecommerce App",
    message: "Ecommerce website made with reactjs",
    image: MobileApp,
    madeWith: ["react"],
    link: "https://parameshkrishnaecommerce.netlify.app/"
  },
  {
    title: "App with redux",
    message: "Ecommerce website with reactjs and redux",
    image: WaterBottle,
    madeWith: ["react", "redux"],
    link: "https://paramesh-krishna-waterbottle-app.netlify.app/"
  },
  {
    title: "Covid-19 tracker",
    message: "Covid-19 tracker with reactjs",
    image: Covid,
    madeWith: ["react", "chartjs"],
    link: "https://parameshkrishna-covid19-tracker.netlify.app/"
  },
  {
    title: "Budget Calculator with Context Api",
    message: "Budget Calculator made with reactjs and context api",
    image: Budget,
    madeWith: ["react"],
    link: "https://paramesh-krishna-budget-caluclator.netlify.app/"
  },
  {
    title: "Image Gallery",
    message: "Image gallery with redux saga",
    image: ImageGallery,
    madeWith: ["react", "redux"],
    link: "https://parameshkrishna-image-gallery-with-saga.netlify.app/"
  }
];

const muiBaseTheme = createMuiTheme();

const theme = {
  overrides: {
    MuiCard: {
      root: {
        "&.MuiEngagementCard--01": {
          transition: "0.3s",
          maxWidth: 300,
          margin: "auto",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
          },
          "& .MuiCardMedia-root": {
            paddingTop: "56.25%"
          },
          "& .MuiCardContent-root": {
            textAlign: "left",
            padding: muiBaseTheme.spacing.unit * 3
          },
          "& .MuiDivider-root": {
            margin: `${muiBaseTheme.spacing.unit * 3}px 0`
          },
          "& .MuiTypography--heading": {
            fontWeight: "bold",
            fontFamily: "Dancing Script"
          },
          "& .MuiTypography--subheading": {
            lineHeight: 1.8,
            fontFamily: "Dancing Script",
            fontSize: "16px"
          },
          "& .MuiAvatar-root": {
            display: "inline-block",
            border: "2px solid white",
            "&:not(:first-of-type)": {
              // marginLeft: -muiBaseTheme.spacing.unit,
            }
          }
        }
      }
    }
  }
};

function Project() {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <div className="App">
        <Grid container>
          {projects.map((item) => (
            <Grid style={{ zIndex: 9 }} item mt={2} sm={12} md={3}>
              <a
                target="_blank"
                style={{ textDecoration: "none" }}
                href={item.link}
              >
                <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                  <Card
                    style={{ minHeight: "430px" }}
                    mt={2}
                    mb={2}
                    className={"MuiEngagementCard--01"}
                  >
                    <CardMedia
                      className={"MuiCardMedia-root"}
                      image={item.image}
                    />
                    <CardContent className={"MuiCardContent-root"}>
                      <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                      >
                        {item.message}
                      </Typography>
                      <Divider className={"MuiDivider-root"} light />
                      {/* {faces.map((face) => (
                      <Avatar
                        className={"MuiAvatar-root"}
                        key={face}
                        src={face}
                      />
                    ))} */}

                      {item.madeWith.includes("react") && (
                        <Avatar className={"MuiAvatar-root"} src={ReactIcon} />
                      )}
                      {item.madeWith.includes("redux") && (
                        <Avatar className={"MuiAvatar-root"} src={Redux} />
                      )}
                    </CardContent>
                  </Card>
                </div>
              </a>
            </Grid>
          ))}
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default Project;

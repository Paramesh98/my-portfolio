import React from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  createTheme,
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
import Mongo from "../../assets/mongodb.svg";
import Calender from "../../assets/calender.png";
import Node from "../../assets/nodejs.svg";
import BeachResort from "../../assets/beach-resort.png";
import Ecommerce from "../../assets/ecommerce.png";
import Instagram from "../../assets/instagram.png";
import MobileApp from "../../assets/mobile-app.png";
import WaterBottle from "../../assets/water-bottle.png";
import PostWithRtkQuery from "../../assets/post-with-rtk-query.png";
import SmileApp from "../../assets/smile-app.png";
import SmileWebApp from "../../assets/smie-web-app.png";
import Covid from "../../assets/covidtracker.png";
import ReduxToolkit from "../../assets/redux-toolkit.png";
import Budget from "../../assets/budget-calculator.png";
import ImageGallery from "../../assets/image-gallery.png";

import "./styles.css";
import { Box, Grid, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";

// Updated project data with avatar images in the "madeWith" array
const projects = [
  {
    title: "Beach Resort",
    message: "Beach Resort website made with reactjs",
    image: BeachResort,
    madeWith: [{ src: ReactIcon, name: "React" }],
    link: "https://paramesh-krishna-beachresort.netlify.app/",
  },
  {
    title: "Mobile Ecommerce App",
    message: "Ecommerce website made with reactjs",
    image: MobileApp,
    madeWith: [{ src: ReactIcon, name: "React" }],
    link: "https://parameshkrishnaecommerce.netlify.app/",
  },
  {
    title: "App with redux",
    message: "Ecommerce website with reactjs and redux",
    image: WaterBottle,
    madeWith: [
      { src: ReactIcon, name: "React" },
      { src: Redux, name: "Redux" },
    ],
    link: "https://paramesh-krishna-waterbottle-app.netlify.app/",
  },
  {
    title: "Budget Calculator with Context API",
    message: "Budget Calculator made with reactjs and context api",
    image: Budget,
    madeWith: [{ src: ReactIcon, name: "React" }],
    link: "https://paramesh-krishna-budget-caluclator.netlify.app/",
  },
  {
    title: "Image Gallery",
    message: "Image gallery with redux saga",
    image: ImageGallery,
    madeWith: [
      { src: ReactIcon, name: "React" },
      { src: Redux, name: "Redux" },
    ],
    link: "https://parameshkrishna-image-gallery-with-saga.netlify.app/",
  },
  {
    title: "E-Commerce",
    message: "E-Commerce app with react",
    image: SmileApp,
    madeWith: [
      { src: ReactIcon, name: "React" },
      { src: Redux, name: "Redux" },
    ],
    link: "https://pk-ecommerce-site.netlify.app",
  },
  {
    title: "RTK Query",
    message: "Posts with RTK Query",
    image: PostWithRtkQuery,
    madeWith: [
      { src: ReactIcon, name: "React" },
      { src: Redux, name: "Redux" },
    ],
    link: "https://posts-with-rtk-query.netlify.app/",
  },
  {
    title: "Pagination & Authentication",
    message: "Pagination and authentication with React and Redux",
    image: SmileWebApp,
    madeWith: [
      { src: ReactIcon, name: "React" },
      { src: Redux, name: "Redux" },
    ],
    link: "https://smile-web-app.netlify.app/",
  },
  {
    title: "App with Redux Tool Kit",
    message: "App with Redux Toolkit with pagination",
    image: ReduxToolkit,
    madeWith: [
      { src: ReactIcon, name: "React" },
      { src: Redux, name: "Redux Toolkit" },
    ],
    link: "https://imaginative-queijadas-f281e4.netlify.app/",
  },
  {
    title: "E-commerce",
    message:
      "Fully functioning e-commerce app with customer/seller/admin login",
    image: Ecommerce,
    madeWith: [
      { src: ReactIcon, name: "React" },
      { src: Redux, name: "Redux" },
      { src: Node, name: "Node" },
      { src: Mongo, name: "Mongo" },
    ],
    link: "https://heuristic-fermi-7e0d8f.netlify.app/",
    disabled: true,
  },
  // {
  //   title: "Calender",
  //   message: "A google like calendar with react and momentjs",
  //   image: Calender,
  //   madeWith: [{ src: ReactIcon, name: "React" }],
  //   link: "https://calender-app-98.netlify.app/",
  // },
  {
    title: "Social Media App",
    message: "Social media app made with react node mongodb",
    image: Instagram,
    madeWith: [
      { src: ReactIcon, name: "React" },
      { src: Node, name: "Node" },
      { src: Mongo, name: "Mongo" },
    ],
    link: "https://parameshkrisna-insttagram.netlify.app/",
    disabled: true,
  },
];

// const theme = createTheme({
//   components: {
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           "&.MuiEngagementCard--01": {
//             transition: "0.3s",
//             maxWidth: 300,
//             margin: "auto",
//             boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
//             "&:hover": {
//               boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
//             },
//             "& .MuiCardMedia-root": {
//               paddingTop: "56.25%",
//             },
//             "& .MuiCardContent-root": {
//               textAlign: "left",
//               padding: 16, // Replace muiBaseTheme.spacing.unit
//             },
//             "& .MuiDivider-root": {
//               margin: "16px 0", // Replace muiBaseTheme.spacing.unit * 3
//             },
//             "& .MuiTypography--heading": {
//               fontWeight: "bold",
//               fontFamily: "monospace",
//             },
//             "& .MuiTypography--subheading": {
//               lineHeight: 1.8,
//               fontFamily: "monospace",
//               fontSize: "16px",
//             },
//             "& .MuiAvatar-root": {
//               display: "inline-block",
//               border: "2px solid white",
//             },
//           },
//         },
//       },
//     },
//   },
// });

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
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
          },
          "& .MuiCardMedia-root": {
            paddingTop: "56.25%",
          },
          "& .MuiCardContent-root": {
            textAlign: "left",
            padding: muiBaseTheme.spacing.unit * 3,
          },
          "& .MuiDivider-root": {
            margin: `${muiBaseTheme.spacing.unit * 3}px 0`,
          },
          "& .MuiTypography--heading": {
            fontWeight: "bold",
            fontFamily: "monospace",
          },
          "& .MuiTypography--subheading": {
            lineHeight: 1.8,
            fontFamily: "monospace",
            fontSize: "13px",
          },
          "& .MuiAvatar-root": {
            display: "inline-block",
            border: "2px solid white",
            "&:not(:first-of-type)": {
              // marginLeft: -muiBaseTheme.spacing.unit,
            },
          },
        },
      },
    },
  },
};
function Project() {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <div className="App">
        <Grid container className="grid_container">
          {projects.map((item) => (
            <NormalCard item={item} />
          ))}
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

// const NormalCard = ({ item }) => {
//   return (
//     <Grid
//       className="item"
//       style={{ zIndex: 9 }}
//       item
//       mt={2}
//       sm={12}
//       md={3}
//       key={item.title}
//     >
//       <a target="_blank" style={{ textDecoration: "none" }} href={item.link}>
//         <div style={{ marginTop: "40px", marginBottom: "40px" }}>
//           <Card
//             style={{ minHeight: "430px" }}
//             mt={2}
//             mb={2}
//             className={"MuiEngagementCard--01"}
//           >
//             <CardMedia className={"MuiCardMedia-root"} image={item.image} />
//             <CardContent className={"MuiCardContent-root"}>
//               <Typography
//                 className={"MuiTypography--heading"}
//                 variant={"h6"}
//                 gutterBottom
//               >
//                 {item.title}
//               </Typography>
//               <Typography
//                 className={"MuiTypography--subheading"}
//                 variant={"caption"}
//               >
//                 {item.message}
//               </Typography>
//               <Divider className={"MuiDivider-root"} light />
//               {item.madeWith.map((tech, index) => (
//                 <Avatar
//                   key={index}
//                   className={"MuiAvatar-root"}
//                   src={tech.src}
//                   title={tech.name}
//                 />
//               ))}
//             </CardContent>
//           </Card>
//         </div>
//       </a>
//     </Grid>
//   );
// };

const NormalCard = ({ item }) => {
  const disabledStyle = {
    pointerEvents: "none",
    opacity: 0.6,
    cursor: "not-allowed",
  };

  return (
    <Grid
      className="item"
      style={{ zIndex: 9 }}
      item
      mt={2}
      sm={12}
      md={3}
      key={item.title}
    >
      <a
        target="_blank"
        style={{
          textDecoration: "none",
          ...(item.disabled ? disabledStyle : {}),
        }}
        href={item.disabled ? undefined : item.link}
      >
        <div style={{ marginTop: "40px", marginBottom: "40px" }}>
          <Card
            style={{
              minHeight: "430px",
              ...(item.disabled
                ? { backgroundColor: "#f5f5f5", color: "#aaa" } // Disabled styles
                : {}),
            }}
            mt={2}
            mb={2}
            className={"MuiEngagementCard--01"}
          >
            <CardMedia
              className={"MuiCardMedia-root"}
              image={item.image}
              style={item.disabled ? { filter: "grayscale(100%)" } : {}}
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

              {item.madeWith.map((tech, index) => (
                <Avatar
                  key={index}
                  className={"MuiAvatar-root"}
                  src={tech.src}
                  title={tech.name}
                />
              ))}
              <div>
                {item.disabled && (
                  <Typography
                    variant={"caption"}
                    style={{ color: "#d32f2f", fontWeight: "bold" }}
                  >
                    This website is currently disabled due to technical errors.
                  </Typography>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </a>
    </Grid>
  );
};

export default Project;

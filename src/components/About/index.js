import * as React from "react";
import "./styles.css";
import Me from "../../assets/me.jpg";
import { Grid } from "@material-ui/core";
import Pdf from "../../assets/new.pdf";

const values = ["About Me", "About Paramesh Krishna"];

const Example = () => {
  return (
    // <Container fluid>
    //   <Card>
    //     <Card.Body>
    //       {/* <h2 className="text-center mb-4">{result}</h2> */}
    //       <Row>
    //         <Col md={6}>
    //           <GlitchClip onHover={true}>
    //             <img className="about_image" src={Me} alt="image" />
    //           </GlitchClip>
    //         </Col>
    //         <Col md={6}>
    //           {/* <ReactTypingEffect
    //             text="Fugiat id minim nostrud excepteur sit mollit amet minim nostrud
    //             culpa anim officia tempor laboris. Lorem ad id sint qui ipsum
    //             reprehenderit laborum. Ex ut culpa irure ex enim amet ipsum. Qui
    //             non Lorem deserunt id officia fugiat id ad consectetur mollit
    //             non duis fugiat reprehenderit. Nulla aliquip eiusmod voluptate
    //             dolore culpa veniam pariatur do fugiat consequat voluptate.
    //             Ipsum elit Lorem nulla tempor sunt tempor commodo. Aute et magna
    //             deserunt excepteur sint occaecat do non est tempor incididunt
    //             mollit id dolor." //text=["Hello.", "World!"]
    //             className="typical"
    //             speed="10"
    //             eraseDelay="50000000"
    //           /> */}
    //           {/* <BouncingText
    //             className={"myClassName"}
    //             text="Fugiat id minim nostrud excepteur sit mollit amet minim nostrud culpa anim officia tempor laboris. Lorem ad id sint qui ipsum
    //             reprehenderit laborum. Ex ut culpa irure ex enim amet ipsum. Qui
    //             non Lorem deserunt id officia fugiat id ad consectetur mollit
    //             non duis fugiat reprehenderit. Nulla aliquip eiusmod voluptate
    //             dolore culpa veniam pariatur do fugiat consequat voluptate.
    //             Ipsum elit Lorem nulla tempor sunt tempor commodo. Aute et magna
    //             deserunt excepteur sint occaecat do non est tempor incididunt
    //             mollit id dolor."
    //             clickable
    //             hoverable
    //             delay={200}
    //             duration={200}
    //           /> */}
    //         </Col>
    //       </Row>
    //     </Card.Body>
    //   </Card>
    // </Container>

    <Grid container>
      <Grid item md={6}>
        {/* <GlitchClip onHover={true}> */}
        <div className="image_container">
          <img
            style={{ width: "100%" }}
            className="about_image"
            src={Me}
            alt="image"
          />
          {/* <p className="name_container">
            <div className="first_child">PARAMESH</div>{" "}
            <div className="second_child">KRISHNA</div>
          </p> */}
        </div>
        {/* </GlitchClip> */}
      </Grid>
      <Grid item md={6}>
        <div className="about_container">
          <p>
            The name’s PARAMESH KRISHNA. I am a tireless seeker of knowledge,
            occassional purveyor of wisdom and also, coincidentally, a web
            developer.
          </p>

          <p>
            <b>I love solving problems</b> Whether it's finding a most elagent
            way to write a line of code or figuring out which chord fits into
            the progression, I love the challenge of finding a way and
            discovering solutions. Maybe that's why I love coding and the
            satisfication that comes from finding soution for error that I've
            debugging for hours.&nbsp;
            {/* ; or why I read the code that I've written in
            spare time to figure out how do I did that.  */}
            As long as there's a problem to solve or a challenge to puzzle over,
            it's bound to be something I love!
          </p>
          <p>
            Wondering if I might be a good fit for your company? checkout my{" "}
            <a href={Pdf} download>
              resume{" "}
            </a>
          </p>
        </div>
      </Grid>
    </Grid>
  );
};
export default Example;

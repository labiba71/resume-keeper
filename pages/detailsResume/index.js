import Image from "next/image";
import DisplayPicture from "../../public/images/ml-squarescropresume.png";
import Navbar from "../../components/navbar/Navbar.jsx";
import Drawer from "../../components/drawer/Drawer.jsx";
import { useStyles } from "./detailsResume.module";
import { Divider, Typography } from "@material-ui/core";

export default function Index() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Drawer />
      <div className={classes.root}>
        <div className={classes.firstPortion}>
          <div className={classes.imagePortion}>
            <Image
              className={classes.imageInnerPortion}
              src={DisplayPicture}
              alt="display picture"
              width="140"
              height="150"
              layout="fixed"
            />
          </div>
          <div className={classes.objectivePortion}>
            <Typography className={classes.name} variant="subtitle1">
              Labiba Ibnat Moumita
            </Typography>
            <Typography variant="subtitle1">Professional Goals</Typography>
            <Typography
              className={classes.details}
              variant="caption"
              display="block"
              gutterBottom
            >
              Hard working and fast learner tech professional with logical,
              analytical, computational skills. To secure a position in your
              company where I can utilize my educational and professional
              experience, communication skills, capacity to work under pressure,
              creativity and integrity would be my career objective.
            </Typography>
          </div>
        </div>
        <div className={classes.secondPortion}>
          <div className={classes.personalPortion}>
            <Typography variant="subtitle1" gutterBottom>
              Get In Touch!
            </Typography>
            <Typography className={classes.title} variant="subtitle2">
              Landline
            </Typography>
            <Typography
              className={classes.details}
              variant="caption"
              display="block"
              gutterBottom
            >
              +8808128931
            </Typography>
            <Typography className={classes.title} variant="subtitle2">
              Mobile
            </Typography>
            <Typography
              className={classes.details}
              variant="caption"
              display="block"
              gutterBottom
            >
              01712097201
            </Typography>
            <Typography className={classes.title} variant="subtitle2">
              Email
            </Typography>
            <Typography
              className={classes.details}
              variant="caption"
              display="block"
              gutterBottom
            >
              labiba.ssp@gmail.com
            </Typography>
            <Typography className={classes.title} variant="subtitle2">
              Website
            </Typography>
            <Typography
              className={classes.details}
              variant="caption"
              display="block"
              gutterBottom
            >
              https://djeventsfrontend00-acyh9c1ni-labiba71.vercel.app/
            </Typography>
            <Typography variant="subtitle2" className={classes.title}>
              Address
            </Typography>
            <Typography
              className={classes.details}
              variant="caption"
              display="block"
              gutterBottom
            >
              dhanmondi 6, house no 29
            </Typography>
          </div>
          <div className={classes.careerPortion}>
            <div className={classes.workPortion}>
              <Typography variant="subtitle1" gutterBottom>
                Work Experience
              </Typography>
              <Typography className={classes.title} variant="subtitle2">
                Software Engineer
              </Typography>
              <Typography variant="subtitle2" className={classes.subTitle}>
                Tigrow Ltd. | August 2019-July 2020
              </Typography>
              <Typography
                className={classes.details}
                variant="caption"
                display="block"
                gutterBottom
              >
                - 1+ year extensive experience as a Frontend developer for
                developing web applications and implementation using Javascript,
                typescript, html, css, scss, react js, styled component
              </Typography>
              <Typography className={classes.title} variant="subtitle2">
                Software Engineer
              </Typography>
              <Typography variant="subtitle2" className={classes.subTitle}>
                Tigrow Ltd. | August 2019-July 2020
              </Typography>
              <Typography
                className={classes.details}
                variant="caption"
                display="block"
                gutterBottom
              >
                - 1+ year extensive experience as a Frontend developer for
                developing web applications and implementation using Javascript,
                typescript, html, css, scss, react js, styled component
              </Typography>
            </div>
            <div className={classes.academicPortion}>
              <Typography variant="subtitle1" gutterBottom>
                Academic History
              </Typography>
              <Typography className={classes.title} variant="subtitle2">
                Ahsanullah University of Science and Technology
              </Typography>
              <Typography variant="subtitle2" className={classes.subTitle}>
                Bachelor of Science (B.Sc.) in Computer Science and Engineering
                | June 2019
              </Typography>
              <Typography
                className={classes.details}
                variant="caption"
                display="block"
                gutterBottom
              >
                - cgpa 3.45 <br />- thesis on genetic algorithm
              </Typography>
              <Typography className={classes.title} variant="subtitle2">
                Ahsanullah University of Science and Technology
              </Typography>
              <Typography variant="subtitle2" className={classes.subTitle}>
                Bachelor of Science (B.Sc.) in Computer Science and Engineering
                | June 2019
              </Typography>
              <Typography
                className={classes.details}
                variant="caption"
                display="block"
                gutterBottom
              >
                - cgpa 3.45 <br />- thesis on genetic algorithm
              </Typography>
            </div>
            <div className={classes.lastPortion}>
              <div className={classes.specializations}>
                <Typography variant="subtitle1" gutterBottom>
                  Specializations
                </Typography>
                <Typography
                  className={classes.details}
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  - React.js <br /> - Node.js <br /> - Typescript <br /> -
                  Communication <br /> - public Speaking
                </Typography>
              </div>
              <div className={classes.languages}>
                <Typography variant="subtitle1" gutterBottom>
                  Languages Spoken
                </Typography>
                <Typography className={classes.title} variant="subtitle2">
                  European:
                </Typography>
                <Typography
                  className={classes.details}
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  Dutch, German, Italian
                </Typography>
                <Typography className={classes.title} variant="subtitle2">
                  Asian:
                </Typography>
                <Typography
                  className={classes.details}
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  Japanese, Bangla, Hindi
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

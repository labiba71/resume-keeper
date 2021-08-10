import { Box, Typography, LinearProgress, Divider } from "@material-ui/core";
import { useStyles } from "./details.module";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Navbar from "../../components/navbar/Navbar.jsx";
import Drawer from "../../components/drawer/Drawer.jsx";

export default function Index() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Drawer />
      <Box>
        <Box className={classes.root}>
          <Typography color="primary" className={classes.title} variant="h4">
            Labiba Ibnat
          </Typography>
          <Box className={classes.designation}>
            <FiberManualRecordIcon style={{ fontSize: 10, margin: "0 5px" }} />
            <Typography variant="caption" display="block" gutterBottom>
              software engineer
            </Typography>
            <FiberManualRecordIcon style={{ fontSize: 10, margin: "0 5px" }} />
          </Box>
          <Box className={classes.personal}>
            <Box className={classes.aboutMe}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                color="primary"
                style={{ letterSpacing: "5px", fontWeight: 600 }}
              >
                ABOUT ME
              </Typography>
              <Typography variant="body2" gutterBottom>
                Hard working and fast learner tech professional with logical,
                analytical, computational skills. To secure a position in your
                company where I can utilize my educational and professional
                experience, communication skills, capacity to work under
                pressure, creativity and integrity would be my career objective.
              </Typography>
            </Box>
            <Box className={classes.education}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                color="primary"
                style={{ letterSpacing: "5px", fontWeight: 600 }}
              >
                EDUCATION
              </Typography>
              <Typography variant="body2" gutterBottom>
                June 2019
                <FiberManualRecordIcon
                  style={{ fontSize: 10, margin: "0 5px" }}
                />
                Ahsanullah University of Science and Technology, Dhaka Bachelor
                of Science (B.Sc.) in Computer Science and Engineering June 2019
                (CGPA : 3.44)
              </Typography>
              <Typography variant="body2" gutterBottom>
                June 2019
                <FiberManualRecordIcon
                  style={{ fontSize: 10, margin: "0 5px" }}
                />
                Ahsanullah University of Science and Technology, Dhaka Bachelor
                of Science (B.Sc.) in Computer Science and Engineering June 2019
                (CGPA : 3.44)
              </Typography>
              <Typography variant="body2" gutterBottom>
                June 2019
                <FiberManualRecordIcon
                  style={{ fontSize: 10, margin: "0 5px" }}
                />
                Ahsanullah University of Science and Technology, Dhaka Bachelor
                of Science (B.Sc.) in Computer Science and Engineering June 2019
                (CGPA : 3.44)
              </Typography>
            </Box>
          </Box>
          <Box style={{ padding: "1rem" }}>
            <Typography
              variant="button"
              display="block"
              gutterBottom
              color="primary"
              style={{ letterSpacing: "5px", fontWeight: 600 }}
            >
              EXPERIENCE
            </Typography>
            <Box className={classes.experience}>
              <Typography
                style={{ fontWeight: 600 }}
                variant="subtitle2"
                gutterBottom
                color="primary"
              >
                2019
              </Typography>
              <Box style={{ marginLeft: "20px" }}>
                <Typography variant="subtitle2" gutterBottom>
                  Tigrow Ltd.
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Frontend Web Developer
                </Typography>
                <Box className={classes.experienceDetails}>
                  <FiberManualRecordIcon
                    style={{ fontSize: 10, margin: "0 5px" }}
                  />
                  <Typography variant="caption" display="block" gutterBottom>
                    1+ year extensive experience as a Frontend developer for
                    developing web applications and implementation using
                    Javascript, typescript, html, css, scss, react js, styled
                    component
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className={classes.experience}>
              <Typography
                style={{ fontWeight: 600 }}
                variant="subtitle2"
                gutterBottom
                color="primary"
              >
                2019
              </Typography>
              <Box style={{ marginLeft: "20px" }}>
                <Typography variant="subtitle2" gutterBottom>
                  Tigrow Ltd.
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Frontend Web Developer
                </Typography>
                <Box className={classes.experienceDetails}>
                  <FiberManualRecordIcon
                    style={{ fontSize: 10, margin: "0 5px" }}
                  />
                  <Typography variant="caption" display="block" gutterBottom>
                    1+ year extensive experience as a Frontend developer for
                    developing web applications and implementation using
                    Javascript, typescript, html, css, scss, react js, styled
                    component
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box style={{ padding: "1rem" }}>
            <Typography
              variant="button"
              display="block"
              gutterBottom
              color="primary"
              style={{ letterSpacing: "5px", fontWeight: 600 }}
            >
              SKILLS
            </Typography>
            <Box className={classes.skill}>
              <Box className={classes.skillInner}>
                <Box>
                  <Typography variant="caption" display="block" gutterBottom>
                    React
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={50}
                    color="secondary"
                  />
                </Box>
                <Box>
                  <Typography variant="caption" display="block" gutterBottom>
                    Redux
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={90}
                    color="secondary"
                  />
                </Box>
                <Box>
                  <Typography variant="caption" display="block" gutterBottom>
                    Next.js
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={70}
                    color="secondary"
                  />
                </Box>
              </Box>
              <Box className={classes.skillInner2}>
                <Box>
                  <Typography variant="caption" display="block" gutterBottom>
                    React
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={10}
                    color="secondary"
                  />
                </Box>
                <Box>
                  <Typography variant="caption" display="block" gutterBottom>
                    Redux
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={50}
                    color="secondary"
                  />
                </Box>
                <Box>
                  <Typography variant="caption" display="block" gutterBottom>
                    Next.js
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={5}
                    color="secondary"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider color="primary" style={{ height: "5px", margin: "1rem" }} />
          <footer style={{ textAlign: "center", margin: "5px" }}>
            <small>01712097201</small>
            <FiberManualRecordIcon style={{ fontSize: 10, margin: "0 5px" }} />
            <small>01878-191480</small>
            <FiberManualRecordIcon style={{ fontSize: 10, margin: "0 5px" }} />
            <Typography variant="caption">labiba.ssp@gmail.com</Typography>
            <FiberManualRecordIcon style={{ fontSize: 10, margin: "0 5px" }} />
            <Typography variant="caption">
              labiba.ibnat@monstar-lab.com
            </Typography>
          </footer>
        </Box>
      </Box>
    </>
  );
}

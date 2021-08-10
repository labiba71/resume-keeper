import { fade, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "3rem",
    [theme.breakpoints.up("sm")]: {
      padding: "10rem",
      width: `calc(100% - 240px)`,
      marginLeft: 240,
    },
  },
  title: {
    background: "linear-gradient(to top, #FCFD02 64%, transparent 36%)",
    margin: "1rem",
    textAlign: "center",
  },
  designation: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },
  personal: {
    padding: "1rem",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  aboutMe: {
    flex: 1,
  },
  education: {
    flex: 1,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "20px",
    },
  },
  experience: {
    display: "flex",
  },
  experienceDetails: {
    display: "flex",
    alignItems: "baseline",
  },
  skill: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
  },
  skillInner: {
    width: "40%",
  },
  skillInner2: {
    width: "40%",
  },
}));

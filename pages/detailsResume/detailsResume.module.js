import { makeStyles } from "@material-ui/core/styles";

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
  firstPortion: {
    display: "flex",
  },
  imagePortion: {
    borderBottom: "1px solid grey",
    padding: "1rem",
    width: "15%",
    textAlign: "centre",
  },
  imageInnerPortion: {
    borderRadius: "50%",
  },
  objectivePortion: {
    borderBottom: "1px solid grey",
    padding: "1rem",
    marginLeft: "1.5rem",
    width: "85%",
  },
  name: {
    fontSize: "1.2rem",
    color: "#7ABABC",
    marginBottom: "12px",
  },
  details: {
    color: "#9199B0",
  },
  secondPortion: {
    display: "flex",
  },
  personalPortion: {
    width: "15%",
    padding: "1rem 0",
  },
  careerPortion: {
    width: "85%",
    padding: "1rem",
    marginLeft: "1.2rem",
  },
  title: {
    color: "#6DB7CD",
  },
  subTitle: {
    fontSize: ".8rem",
  },
  workPortion: {
    borderBottom: "1px solid grey",
  },
  academicPortion: {
    borderBottom: "1px solid grey",
    padding: "1rem 0",
  },
  lastPortion: {
    display: "flex",
  },
  specializations: {
    flex: 1,
    borderRight: "1px solid grey",
    padding: "1rem 0",
  },
  languages: {
    flex: 1,
    marginLeft: "15px",
    padding: "1rem 0",
  },
}));

import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";

export const Style = makeStyles((theme) =>
  createStyles({
    modal: {
      display: "flex",
      justifyContent: "center",
    },
    paper1: {
      border: "none",
      padding: theme.spacing(2, 4, 3),
    },
    container: {
      background: '#FFFFFF',
      borderRadius: '25px',
      minWidth:'400px',
      overflow: 'auto',
      padding:20,
      ["@media (max-width:400px)"]: {
        minWidth: 320,
    },
    },
    section1:{
    display: 'flex',
    flexDirection: 'column'
    },
    title:{
    fontWeight: 'bold',
    fontSize: '27px',
    lineHeight: '40px',
    textAlign: 'center',
    color: '#364954',
    marginTop:2,
    marginBottom:0,
    ["@media (max-width:400px)"]: {
      fontSize: 25,
  }
    },
    image:{
        width: 300,
       height: 200,
       alignSelf: 'center',
       margin: '0px 20px',
      
    },
    text1:{
    maxWidth: 290,
    fontSize: 19,
    lineHeight: '28px',
    marginLeft: 20,
    marginTop: 16,
    ["@media (max-width:400px)"]: {
      fontSize: 16,
  }
    },
    fields:{
      marginTop:30
    },
    closeBtnDiv:{
      textAlign: 'end',
      marginBottom: '-12px',
      cursor:'pointer'
    },
    buttonContainer:{
      display: 'flex',
      justifyContent: 'flex-end',
      margin:'10px'
    },
    imgContainer:{
      marginTop:'-5px',
      marginLeft:'10px'
    }
  })
);
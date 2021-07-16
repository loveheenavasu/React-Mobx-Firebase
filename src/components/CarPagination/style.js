import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        justifyContent:'flex-end',
        marginBottom:'20px',
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
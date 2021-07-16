import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
      marginTop:'40px',
      height:360,
      border: '1px solid #d0caca'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    description: {
      display: '-webkit-box',
      overflow: 'hidden',
      '-webkit-line-clamp': 4,
      '-webkit-box-orient': 'vertical'
    },
    header:{
      '& .MuiTypography-h5':{
        fontSize:18
      }
    },
    IconBtn:{
      '& .MuiIconButton-label':{
        '& .MuiSvgIcon-root':{
          width: '0.8em'
        }
      }
    }
  }));
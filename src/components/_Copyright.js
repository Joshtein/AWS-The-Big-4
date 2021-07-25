import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Copyright({bgColor = null, textColor = null} = {}) {
  return (
    <Box p={2} style={{backgroundColor: (bgColor || "inherit")}}>
      <Typography variant="body2" color="textSecondary" align="center" style={{color: textColor || "inherit"}}>
        {'Copyright © '}
        <Link to="/" style={{color: "inherit"}}>
          CollegeUp
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}
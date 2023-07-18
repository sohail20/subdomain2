import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function CustomCards({ children, handleClick }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>{children}</CardContent>
          <CardActions>
            <Button size="small" onClick={handleClick}>
              Add Host Name
            </Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}

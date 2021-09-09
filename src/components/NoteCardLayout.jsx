import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  titleStyle: {
    fontWeight: 600,
  },
  contentStyle: {
    fontWeight: 500,
  },
}));

function NoteCardLayout({ note }) {
  const classes = useStyles(note);

  return (
    <div>
      <Card elevation={1}>
        <CardContent>
          <Typography className={classes.titleStyle}>{note.title}</Typography>
          <Typography className={classes.contentStyle} variant="body2">
            {note.content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default NoteCardLayout;

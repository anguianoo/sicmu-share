import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
  makeStyles
} from "@material-ui/core"
import { PlayArrow, Save } from "@material-ui/icons"
import React, { useEffect } from "react"

function SongList() {
  let loading = false

  const song = {
    title: "lune",
    song: "moon",
    thumbnail:
      "https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png"
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 50
        }}
      >
        <CircularProgress />
      </div>
    )
  }

  return (
    <div>
      {Array.from({ length: 10 }, () => song).map((song, i) => (
        <Song key={i} song={song} />
      ))}
    </div>
  )
}
const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(3)
  },
  songInfoContainer: {
    display: "flex",
    alignItems: "center"
  },
  songInfo: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  thumbnail: {
    objectfit: "cover",
    width: 140,
    height: 140
  }
}))

function Song({ song }) {
  const classes = useStyles()
  const { title, artist, thumbnail } = song

  return (
    <Card className={classes.container}>
      <div className={classes.songInfoContainer}>
        <CardMedia image={thumbnail} className={classes.thumbnail} />
        <div className={classes.songInfo}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body1" component="p">
              {artist}
            </Typography>
            <CardContent>
              <IconButton size="small" color="primary">
                <PlayArrow />
              </IconButton>
              <IconButton size="small" color="primary">
                <Save color="secondary" />
              </IconButton>
            </CardContent>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}

export default SongList

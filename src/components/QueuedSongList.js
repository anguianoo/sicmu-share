import { useMutation } from "@apollo/client"
import {
  Avatar,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery
} from "@material-ui/core"
import { Delete } from "@material-ui/icons"
import React, { useEffect } from "react"
import { ADD_OR_REMOVE_FROM_QUEUE } from "../graphql/mutation"

function QueuedSongList({ queue }) {
  const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up("md"))

  // const song = {
  //   title: "lune",
  //   song: "moon",
  //   thumbnail:
  //     "https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png"
  // }

  return (
    greaterThanMd && (
      <div
        style={{
          margin: "10px 0"
        }}
      >
        <Typography color="textSecondary" variant="button">
          QUEUE ({queue.length})
        </Typography>
        {queue.map((song, i) => (
          <QueuedSong key={i} song={song} />
        ))}
      </div>
    )
  )
}

const useStyles = makeStyles({
  avatar: {
    width: 44,
    height: 44
  },
  text: {
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  container: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "50px auto 50px",
    gridGap: 12,
    alignItems: "center",
    marginTop: 10
  },
  songInfoContainer: {
    overflow: "hidden",
    whiteSpace: "nowrap"
  }
})

function QueuedSong({ song }) {
  const classes = useStyles()
  const [addOrRemoveFromQueue] = useMutation(ADD_OR_REMOVE_FROM_QUEUE, {
    onCompleted: data => {
      localStorage.setItem("queue", JSON.stringify(data.addOrRemoveFromQueue))
    }
  })
  const { thumbnail, artist, title } = song

  function handleAddOrRemoveFromQueue() {
    addOrRemoveFromQueue({
      variables: {
        input: { ...song, __typename: "Song" }
      }
    })
  }

  return (
    <div className={classes.container}>
      <Avatar src={thumbnail} alt="Song thumbnail" />
      <div className={classes.songInfoContainer}>
        <Typography variant="subtitle2" className={classes.text}>
          {title}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          className={classes.text}
        >
          {artist}
        </Typography>
      </div>
      <IconButton onClick={handleAddOrRemoveFromQueue}>
        <Delete color="error" />
      </IconButton>
    </div>
  )
}

export default QueuedSongList
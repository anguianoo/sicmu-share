import { useSubscription } from "@apollo/client"
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
  makeStyles,
  Tooltip
} from "@material-ui/core"
import { Pause, PlayArrow, Save, Delete } from "@material-ui/icons"
import EditIcon from "@material-ui/icons/Edit"
import React, { useEffect, useState } from "react"
import { GET_SONGS } from "../graphql/subscriptions"
import { SongContext } from "../App"
import { useMutation } from "@apollo/client"
import { ADD_OR_REMOVE_FROM_QUEUE } from "../graphql/mutation"
import { REMOVE_SONG } from "../graphql/mutation"

function SongList() {
  const { data, loading, error } = useSubscription(GET_SONGS)

  // const song = {
  //   title: "lune",
  //   artist: "moon",
  //   thumbnail:
  //     "https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png"
  // }

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
  if (error) {
    return <div>Error fetching songs</div>
  }

  return (
    <div>
      {data.songs.map(song => (
        <Song key={song.id} song={song} />
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
  const { id } = song
  const classes = useStyles()
  const [addOrRemoveFromQueue] = useMutation(ADD_OR_REMOVE_FROM_QUEUE, {
    onCompleted: data => {
      localStorage.setItem("queue", JSON.stringify(data.addOrRemoveFromQueue))
    }
  })
  const [removeSong] = useMutation(REMOVE_SONG)

  const { state, dispatch } = React.useContext(SongContext)
  const [currentSongPlaying, setCurrentSongPlaying] = React.useState(false)
  const { title, artist, thumbnail } = song

  React.useEffect(() => {
    const isSongPlaying = state.isPlaying && id === state.song.id
    setCurrentSongPlaying(isSongPlaying)
  }, [state.song.id, state.isPlaying])

  function handleSongChange() {
    console.log("changing")
  }

  function handleTogglePlay() {
    dispatch({ type: "SET_SONG", payload: { song } })
    dispatch(state.isPlaying ? { type: "PAUSE_SONG" } : { type: "PLAY_SONG" })
  }
  function handleAddOrRemoveFromQueue() {
    addOrRemoveFromQueue({
      variables: {
        input: { ...song, __typename: "Song" }
      }
    })
  }
  async function handleRemoveSong() {
    const data = await removeSong({
      variables: { id },
      update: cache => {
        const prevSongs = cache.readQuery({ query: GET_SONGS })
        const newSongs = prevSongs.songs.filter(song => song.id !== id)
        cache.writeQuery({ query: GET_SONGS, data: { song: newSongs } })
      }
    })
  }

  return (
    <Card className={classes.container}>
      <div className={classes.songInfoContainer}>
        <CardMedia image={thumbnail} className={classes.thumbnail} />
        <div className={classes.songInfo}>
          <CardContent>
            <Typography
              onChange={handleSongChange}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {title}
            </Typography>
            <Typography
              onChange={handleSongChange}
              variant="body1"
              component="p"
            >
              {artist}
            </Typography>
            <CardContent>
              <IconButton
                onClick={handleTogglePlay}
                size="small"
                color="primary"
              >
                {currentSongPlaying ? (
                  <Pause color="yellow" />
                ) : (
                  <PlayArrow color="secondary" />
                )}
              </IconButton>
              <Tooltip title="add to Playlist">
                <IconButton
                  onClick={handleAddOrRemoveFromQueue}
                  size="small"
                  color="primary"
                >
                  <Save color="secondary" />
                </IconButton>
              </Tooltip>
              <Tooltip title="delete">
                <IconButton
                  onClick={handleRemoveSong}
                  size="small"
                  color="primary"
                >
                  <Delete color="error" />
                </IconButton>
              </Tooltip>
            </CardContent>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}

export default SongList

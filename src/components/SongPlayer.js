import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Slider,
  makeStyles
} from "@material-ui/core"
import { Pause, PlayArrow, SkipNext, SkipPrevious } from "@material-ui/icons"
import React, { useState } from "react"
import QueuedSongList from "./QueuedSongList"
import { SongContext } from "../App"
import { useQuery } from "@apollo/client"
import { GET_QUEUED_SONGS } from "../graphql/quiries"
import ReactPlayer from "react-player"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 15px"
  },
  content: {
    flex: "1 0 auto"
  },
  thumbnail: {
    width: 150
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}))

function SongPlayer() {
  const { data } = useQuery(GET_QUEUED_SONGS)
  const reactPlayerRef = React.useRef()
  const { state, dispatch } = React.useContext(SongContext)
  const [played, setPlayed] = useState(0)
  const [playedSeconds, setPlayedSeconds] = useState(0)
  const [seeking, setSeeking] = React.useState(false)
  const [positionInQueue, setPositionInQueue] = useState(0)
  const classes = useStyles()

  React.useEffect(() => {
    const songIndex = data.queue.findIndex(song => song.id === state.song.id)
    setPositionInQueue(songIndex)
  }, [data.queue, state.song.id])

  React.useEffect(() => {
    const nextSong = data.queue[positionInQueue + 1]
    if (played === 0.99 && nextSong) {
      setPlayed(0)
      dispatch({ type: "SET_SONG", payload: { song: nextSong } })
    }
  }, [data.queue, played, dispatch, positionInQueue])

  function handleTogglePlay() {
    dispatch(state.isPlaying ? { type: "PAUSE_SONG" } : { type: "PLAY_SONG" })
  }

  function handleProgressrChange(e, newValue) {
    setPlayed(newValue)
  }

  function handleSeekMouseDown() {
    setSeeking(true)
  }
  function handleSeekMouseUp() {
    setSeeking(false)
    reactPlayerRef.current.seekTo(played)
  }
  function formatDuration(seconds) {
    return new Date(seconds * 1000).toISOString().substr(11, 8)
  }
  function handlePlayPrevSong() {
    const prevSong = data.queue[positionInQueue - 1]
    if (prevSong) {
      dispatch({ type: "SET_SONG", payload: { song: prevSong } })
    }
  }
  function handlePlayNextSong() {
    const nextSong = data.queue[positionInQueue + 1]
    if (nextSong) {
      dispatch({ type: "SET_SONG", payload: { song: nextSong } })
    }
  }

  return (
    <>
      <Card className={classes.container} variant="outlined">
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h5" component="h3">
              {state.song.title}
            </Typography>
            <Typography variant="subtitle1" component="p" color="textSecondary">
              {state.song.artist}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton onClick={handlePlayPrevSong}>
              <SkipPrevious />
            </IconButton>
            <IconButton onClick={handleTogglePlay}>
              {state.isPlaying ? (
                <Pause className={classes.playIcon} />
              ) : (
                <PlayArrow className={classes.playIcon} />
              )}
            </IconButton>
            <IconButton onClick={handlePlayNextSong}>
              <SkipNext />
            </IconButton>
            <Typography variant="subtitle1" component="p" color="textSecondary">
              {formatDuration(playedSeconds)}
            </Typography>
          </div>
          <Slider
            onMouseUp={handleSeekMouseUp}
            onMouseDown={handleSeekMouseDown}
            onChange={handleProgressrChange}
            value={played}
            type="range"
            min={0}
            max={1}
            step={0.01}
          />
        </div>
        <ReactPlayer
          ref={reactPlayerRef}
          onProgress={({ played, playedSeconds }) => {
            if (!seeking) {
              setPlayed(played)
              setPlayedSeconds(playedSeconds)
            }
          }}
          url={state.song.url}
          playing={state.isPlaying}
          hidden
        />
        <CardMedia className={classes.thumbnail} image={state.song.thumbnail} />
      </Card>
      <QueuedSongList queue={data.queue} />
    </>
  )
}

export default SongPlayer

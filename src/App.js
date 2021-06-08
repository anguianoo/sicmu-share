import React, { useContext, useReducer } from "react"
import AddSong from "./components/AddSong"
import Header from "./components/Header"
import SongList from "./components/SongList"
import SongPlayer from "./components/SongPlayer"
import { Grid, useMediaQuery, Hidden } from "@material-ui/core"
import songReducer from "./reducer"
// import SongContext from "./components/SongContext"

// header
// search song
// list of songs
// play list
export const SongContext = React.createContext({
  song: {
    id: "b45a2f2b-4118-43c1-b829-0a4a66b4123a",
    title: "Music Mix 2021 🎧 Remixes of Popular Songs 🎧 EDM Best Music Mix",
    artist: "magic music",
    thumbnail: "http://img.youtube.com/vi/EIecjyG4vxs/0.jpg",
    url: "https://www.youtube.com/watch?v=EIecjyG4vxs",
    duration: 4760
  },
  isPlaying: false
})

function App() {
  const initialSongState = useContext(SongContext)
  const [state, dispatch] = useReducer(songReducer, initialSongState)
  const greaterThansm = useMediaQuery(theme => theme.breakpoints.up("sm"))
  const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up("md"))

  return (
    <SongContext.Provider value={{ state, dispatch }}>
      <Hidden only="xs">
        <Header />
      </Hidden>

      <Grid container spacing={3}>
        <Grid
          style={{
            paddingTop: greaterThansm ? 80 : 10
          }}
          item
          xs={12}
          md={7}
        >
          <AddSong />
          <SongList />
        </Grid>
        <Grid
          style={
            greaterThanMd
              ? { position: "fixed", width: "100%", right: 0, top: 70 }
              : {
                  position: "fixed",
                  width: "100%",
                  left: 0,
                  bottom: 0
                }
          }
          item
          xs={12}
          md={5}
        >
          <SongPlayer />
        </Grid>
      </Grid>
    </SongContext.Provider>
  )
}

export default App

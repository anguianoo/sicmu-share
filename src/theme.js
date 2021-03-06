import { createMuiTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: red,
    secondary: {
      main: "#94FFC0"
    },
    yellow: {
      main: "#ffd359"
    }
  }
})

export default theme

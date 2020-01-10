import { createMuiTheme } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  icons: {
    done: green[500],
    edit: orange[500],
  },
});

export default theme;

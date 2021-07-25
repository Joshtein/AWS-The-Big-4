import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {mainListItems} from './listItems';
import Deposits from './Deposits';
import Orders from './Orders';
import News from './News';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: 1000,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 850,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 700,
  },
  fixedHeight2: {
    height: 90,
  },
  calButton: {
    fontSize: 30,
    maxWidth: '3000px', 
    maxHeight: '30px',
    minWidth: '1080px', 
    minHeight: '90px',
    paddingLeft: '90px',
    fontWeight: 'bold',
  }
}));

export default function Landing() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap className={classes.title}>
            College-Up
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={1}>
            {/* Chart */}
              
              <Paper className={classes.fixedHeight2}>
              <Button variant="contained" size='large' className={classes.calButton}>CALCULATE!</Button>
              </Paper>
        </Grid>
        </Container>
        <Grid container spacing={1}>
            {/* Chart */}
              <Paper className={fixedHeightPaper}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum vehicula ante, non efficitur sem venenatis sed. Etiam quis turpis ex. Nulla eget suscipit lectus. Nam faucibus tortor rutrum dolor faucibus, euismod bibendum lectus ultricies. Fusce bibendum mi ut mauris tempor, dignissim fermentum nunc pretium. Pellentesque elementum libero sit amet turpis porta dignissim ac nec dolor. Integer ullamcorper, metus sit amet ultrices ullamcorper, mauris ante tristique felis, iaculis tincidunt velit augue sed orci. Etiam in lorem aliquet, convallis elit in, vestibulum leo. Nunc egestas interdum quam quis consequat. Nunc vel mauris tempus, venenatis justo non, eleifend ante. Donec lobortis ligula tincidunt risus mattis accumsan. Etiam lacinia sem a ipsum molestie ornare. Fusce semper, magna at ornare tincidunt, odio orci facilisis nunc, at egestas orci ligula sit amet ipsum. Nam ac ligula ornare, pellentesque elit non, hendrerit libero. Aliquam lacinia felis nec dolor sagittis sagittis.

Sed sed euismod nisi, eu blandit turpis. Cras rutrum mollis quam, quis fringilla elit lacinia vitae. Nullam elementum mi eget arcu sodales posuere. Vivamus sapien elit, consequat sit amet cursus non, mattis eget sem. Mauris a mauris erat. Proin quis sapien sit amet arcu blandit vulputate vitae eu mauris. Nunc accumsan eleifend nulla. Curabitur facilisis augue quis suscipit euismod. Sed lobortis orci vel felis efficitur gravida. Sed dapibus, lectus ac laoreet vehicula, leo nisi imperdiet elit, et vulputate turpis tellus a ligula.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin efficitur, sapien ut accumsan posuere, lacus orci consequat justo, non imperdiet turpis leo non mi. Donec sapien nisi, cursus a magna laoreet, posuere feugiat ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec augue ante, maximus vel enim eu, rutrum faucibus dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Vivamus hendrerit nunc sed scelerisque molestie. Duis posuere diam sed pulvinar dignissim. Nunc auctor nisi non sapien gravida luctus. Nunc at metus quis tellus efficitur placerat. Nulla elementum blandit molestie. Praesent porttitor iaculis augue, non congue magna tristique ut. Nulla aliquam bibendum nisl non efficitur.

Mauris nisi nisi, facilisis id eleifend in, sollicitudin eget tellus. Vestibulum egestas vestibulum dolor, ut aliquam felis luctus et. Donec elementum massa vitae erat varius dignissim. Duis diam neque, bibendum non augue sit amet, consequat tempus ipsum. Sed sit amet lectus venenatis, imperdiet velit sit amet, vestibulum eros. Morbi at tempus ex. Vivamus fringilla leo sit amet diam condimentum accumsan. Integer vitae commodo sem, in viverra leo. Etiam rutrum, turpis eleifend luctus viverra, dui sem consequat purus, ac ornare eros ante ac urna. Cras rutrum urna ac nisl cursus, in rhoncus lorem dapibus. Nunc et purus at massa accumsan volutpat. Ut faucibus odio sit amet ipsum sodales, at lacinia justo accumsan. Nulla mattis faucibus convallis. Praesent scelerisque risus consequat nunc condimentum, at malesuada quam aliquam.

Vivamus fringilla diam eget lectus placerat venenatis. Quisque ut risus ante. Pellentesque pharetra lacinia sapien, sed finibus quam gravida sed. Proin at iaculis erat, ac hendrerit enim. Curabitur ultrices volutpat augue eget egestas. Aliquam commodo lectus ut tortor condimentum, at pretium risus convallis. Nulla lacinia ullamcorper lorem in tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut commodo, eros eget feugiat gravida, orci erat iaculis purus, eu pellentesque magna sapien ut risus. Cras augue mi, molestie et fringilla quis, scelerisque at mauris. In pulvinar metus sed tortor posuere ornare. Quisque non euismod ex, nec fringilla nisi. Ut eget ipsum dignissim, hendrerit enim in, iaculis libero. Cras suscipit, quam eu luctus mollis, orci nunc suscipit tellus, ut laoreet diam sapien vel eros. Proin aliquet eleifend volutpat. Vestibulum pretium nunc at enim semper, ac maximus eros molestie.

Integer a eros gravida, porttitor enim sed, feugiat eros. Duis nec laoreet nunc. Quisque imperdiet sem quis metus posuere, vel malesuada quam ullamcorper. Integer feugiat eget sapien quis hendrerit. Mauris orci urna, lobortis imperdiet quam ac, pharetra consequat ligula. In viverra vestibulum arcu vitae euismod. Mauris bibendum sapien urna, nec ullamcorper lectus interdum at. Donec dignissim vehicula nunc, at dignissim purus gravida quis. Donec pretium, mi ut efficitur interdum, mauris purus vestibulum risus, vel pulvinar neque magna at tellus. Sed id velit non nunc lobortis ultrices. Aliquam erat volutpat.

Donec id mattis mi, vel imperdiet nibh. Aliquam egestas congue diam sit amet pellentesque. Vestibulum eu consectetur mauris. Vestibulum cursus turpis non mi egestas, quis vulputate nulla consectetur. Aenean porttitor turpis eget auctor lobortis. Nulla imperdiet vel dui ut cursus. Proin sed odio eget dui aliquam scelerisque ac vitae nunc. Pellentesque massa dolor, gravida ac luctus non, porta sed est.

Duis id pharetra erat, eu blandit sapien. Nunc porttitor, diam aliquam pretium lacinia, risus urna varius erat, a luctus lacus enim et augue. Duis consequat laoreet tortor finibus ullamcorper. Sed tristique lacinia dictum. Nam vitae eros in augue posuere pretium et sed velit. Etiam pharetra dui nunc, quis tincidunt lectus condimentum eget. Proin sed maximus neque. Aliquam eu nisi quis elit porta faucibus. Maecenas quis vestibulum turpis, et placerat tellus. Praesent lobortis dui malesuada odio dignissim rutrum. Fusce eu lectus a ante pharetra faucibus non vel risus. Fusce eu vulputate elit.

Donec nec neque eget ligula sodales porta quis nec nibh. Etiam ornare enim vel est euismod, eu faucibus felis consequat. Nam venenatis mi sed tortor convallis, vitae imperdiet odio tristique. Maecenas tincidunt enim at mauris feugiat, vel bibendum tellus mattis. Maecenas vehicula hendrerit nisi eu egestas. In ultricies pulvinar urna tristique luctus. Nunc mollis pretium arcu, sed faucibus elit pellentesque non. Praesent cursus ligula sit amet massa efficitur mattis. Vestibulum rutrum semper velit id auctor. Quisque eget velit mollis, bibendum augue vel, suscipit nulla.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras odio enim, luctus sit amet sollicitudin a, molestie eget eros. Praesent risus augue, ultrices nec consequat finibus, dictum nec leo. Donec ac dictum quam. Aenean in dignissim arcu. Mauris leo velit, bibendum eget suscipit sit amet, semper id diam. Aliquam euismod ac felis ac consectetur. Pellentesque non dolor vel erat aliquam pretium. Nam ut porttitor est, at placerat diam. Sed consequat magna et fringilla bibendum.

Donec aliquet, lectus in elementum hendrerit, nisl metus auctor ligula, in vestibulum ante arcu eu ligula. Pellentesque sit amet lacus in lorem ultrices dictum et sed neque. Aenean urna est, rutrum vehicula hendrerit vel, varius sit amet neque. In felis justo, fermentum nec volutpat quis, pulvinar non turpis. Aliquam a dui finibus leo pretium dictum. Aliquam non ante vulputate, facilisis libero a, fermentum elit. Ut mattis luctus mi, id hendrerit massa cursus quis. Suspendisse urna nisl, tristique sed orci vitae, posuere congue dolor. Phasellus scelerisque sagittis arcu, vel sagittis leo convallis non. Morbi sagittis nunc orci, in ultrices velit aliquam vel. Aenean luctus sem justo, non lacinia mauris convallis a. Nullam vulputate erat sit amet lectus lobortis interdum.

Mauris ac nisl neque. Duis augue justo, efficitur sollicitudin libero vitae, ultricies tempor augue. Curabitur pretium tellus molestie ligula viverra, eu posuere neque consectetur. Pellentesque egestas lobortis urna, quis feugiat mi vulputate non. Quisque lorem massa, accumsan sit amet dolor sed, fermentum hendrerit eros. Aenean lobortis malesuada commodo. Suspendisse potenti. Proin sed est mollis, cursus ipsum eu, aliquet quam. Curabitur id ipsum bibendum velit egestas dictum eu eget velit. Suspendisse volutpat varius odio, quis scelerisque massa posuere varius. Quisque porta ullamcorper dui, vitae accumsan dui pulvinar porttitor. Donec pharetra scelerisque odio, eu rutrum augue mollis at. Maecenas quis pretium mi, id vehicula lorem. Integer vitae nibh nec sapien feugiat rhoncus et vitae dolor.

Sed velit libero, pellentesque sed pellentesque vitae, eleifend eget leo. In hac habitasse platea dictumst. Ut at efficitur quam. Fusce fermentum nec arcu eu lacinia. Curabitur at tortor vel metus feugiat placerat. Ut ullamcorper sem ac est rutrum, dignissim gravida libero dignissim. Etiam velit sem, luctus eu ornare ac, ullamcorper sed arcu.

Nam ullamcorper tempus nulla, eu ultrices odio varius ac. Pellentesque venenatis, nunc eget varius lobortis, lorem ex rhoncus enim, nec commodo est nunc ut nisi. Curabitur nec justo id leo suscipit maximus. Curabitur tristique diam sit amet maximus consequat. Donec consequat arcu justo, ac accumsan est vestibulum vel. Mauris lobortis felis nec nibh fringilla tincidunt. Nunc tristique vulputate tempor. Etiam vitae bibendum turpis.

Nunc vitae blandit neque. Aliquam malesuada nisl neque, eget varius nisi tincidunt eu. Proin egestas accumsan hendrerit. Etiam eleifend, mi quis aliquet tempus, risus quam fermentum elit, sit amet ullamcorper nulla leo ac est. Pellentesque nec scelerisque enim. Donec pellentesque massa velit, et posuere nisl interdum vitae. In lorem nisi, pharetra vitae fermentum id, pellentesque vitae purus. Fusce sit amet condimentum nunc. Mauris tincidunt nec felis ut mattis. Sed quam nunc, scelerisque ut nisi sed, fringilla molestie nisi. Cras ipsum odio, iaculis sed ullamcorper non, pellentesque nec arcu. Pellentesque nec sollicitudin sapien. Suspendisse potenti. Vivamus sodales rhoncus eros. Sed consectetur fringilla lectus.

              </Paper>
        </Grid>
                <Container maxWidth="lg" className={classes.container}>
          
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={22}>
              <Paper className={fixedHeightPaper}>
              
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={11}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

import React from 'react';
import { connect } from 'react-redux'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import { useHistory } from 'react-router-dom';
import { updateLogOut, updateRecommendationParams } from '../../redux/coba';

function MainListItems (props) {
  const history = useHistory();

  const logOut = (event) => {
    event.preventDefault();
    props.updateLogOut();
    const params = {
      updated: false,
    }
    props.updateRecommendationParams(params);
    history.push('/login')
  }

  const home = (event) => {
    event.preventDefault();
    history.push('/')
  }

  return(
    <List>
      <div>
      <ListItem button onClick={home}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button onClick={logOut}>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </div>
  </List>
  )
}
  

const mapStateToProps = state => {
  return {
    status: state.statusLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLogOut: () => dispatch(updateLogOut()),
    updateRecommendationParams: (params) => dispatch(updateRecommendationParams(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainListItems);
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import AppBar from '@material-ui/core/AppBar';

import './Footer.css';
import {withRouter} from 'react-router-dom';






const Footer = (props) => {

  const {history} = props;
  const [value, setValue] = React.useState(0);
  const handleNavgationClick = (newPage) =>{
    history.push(newPage);
  }

  return (
    <AppBar position="fixed" className="BottomNavigation">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction onClick={() => handleNavgationClick('/')}  label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction onClick={() => handleNavgationClick('/recent')} label="Recents"  icon={<RestoreIcon />} />
        <BottomNavigationAction onClick={() => handleNavgationClick('/favorite')} label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction onClick={() => handleNavgationClick('/nearby')} label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </AppBar>
    
  );
}

export default withRouter(Footer);
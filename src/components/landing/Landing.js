import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LandingNavbar from '../LandingNavbar';
import LandingHero from './_LandingHero';

function Landing() {
  return (
    <div>
      <LandingNavbar/>
      <LandingHero/>
    </div>
  )
}


export default Landing;
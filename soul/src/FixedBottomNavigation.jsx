import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import './Home.css';


import GroupWorkIcon from '@mui/icons-material/GroupWork';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import HomeIcon from '@mui/icons-material/Home';
import HandshakeIcon from '@mui/icons-material/Handshake';
import InfoIcon from '@mui/icons-material/Info';

import { useNavigate } from 'react-router-dom';

export default function FixedBottomNavigation() {

  const [value, setValue] = React.useState(0);
  const Navigate= useNavigate();

  
  

  return (


    <div className='Main'  >
    <Box sx={{ width: "100%"  }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      >
        <BottomNavigationAction label="HOME" icon  ={< HomeIcon/>}  onClick={()=>{
                                                              Navigate('/')
        }} />
        <BottomNavigationAction label=" WORK" icon={<GroupWorkIcon />} onClick={()=>{
                                                              Navigate('/work')
        }}  />
        <BottomNavigationAction label=" US" icon={< InfoIcon/>}onClick={()=>{
                                                              Navigate('/aboutus')
        }}  />
        <BottomNavigationAction label="JOIN US" icon={<HandshakeIcon  />} onClick={()=>{
                                                              Navigate('/join')
        }} /> 
        <BottomNavigationAction label="DONATE" icon={<HandshakeIcon  />} onClick={()=>{
                                                              Navigate('/donation')
        }} />
      

      </BottomNavigation>
    </Box>
    </div>
  );
}
import React from 'react'
import { IconContext} from "react-icons";
import './Tech.css';
// import Section from './primitives/section'
// import { Heading, Box, Flex, Text } from '@chakra-ui/react'
import {Icon, icons} from './Icon';
// import ReactTooltip from "react-tooltip";
// import { useTheme } from "@chakra-ui/react"

// import { useColorMode } from '@chakra-ui/color-mode'

const Tech=()=>{
  return(
  <div className='third'>
  <h2 >Tech I know</h2>
  <br/>
  <div className='tec'>
  <IconContext.Provider value={{ color: 'white',size:'40px', className: "global" }}>
  <Icon/>
  </IconContext.Provider>
  </div>
  </div>
  );
}


export default Tech
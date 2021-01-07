import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import PeopleIcon from '@material-ui/icons/People'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow src='https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg' title='Jordan Type'/>
      <SidebarRow Icon={ LocalHospitalIcon } title='COVID-19 Information centre' />
      <SidebarRow Icon={ EmojiFlagsIcon } title='Pages' />
      <SidebarRow Icon={ PeopleIcon } title='Friends' />
      <SidebarRow Icon={ ChatIcon } title='Messager' />
      <SidebarRow Icon={ StorefrontIcon } title='Marketplace' />
      <SidebarRow Icon={ VideoLibraryIcon } title='Videos' />
      <SidebarRow Icon={ ExpandMoreOutlinedIcon } title='See More' />
    </div>
  );
}

export default Sidebar

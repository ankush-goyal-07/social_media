import './topbar.css'
import {Search , Person, Notifications} from '@material-ui/icons';

export default function Topbar(){
  return(
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Technoera</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search for Questions , friends" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink" >Statistics</span>
          <span className="topbarLink" >Questions</span>
          <span className="topbarLink" >Profile</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem" >
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem" >
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/persons/5.jpeg" alt="" className="topbarImg" />
      </div>

    </div>
  )

}

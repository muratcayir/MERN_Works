import { PlayArrow ,Add, ThumbUpAltOutlined, ThumbDownAltOutlined} from "@material-ui/icons"
import "./listItem.scss"

export default function ListItem(){
    return(
        <div className="listItem">
          <img src="http://3.bp.blogspot.com/-bhA_r6AKT1A/VpVPtwhY64I/AAAAAAAAG4A/-ugNu3isn-Y/s1600/b3rzMCR-full-hd-and-3d-wallpapers.jpg" alt=""/>
          <div className="itemInfo">
              <div className="icoms">
                  <PlayArrow/>
                  <Add/>
                  <ThumbUpAltOutlined/>
                  <ThumbDownAltOutlined/>
              </div>
          </div>
       </div>

        
    )
}

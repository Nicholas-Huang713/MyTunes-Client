import React, {useState} from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import './PlaylistCardSm.scss';

export default function PlaylistCardSm() {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className="playlist-card-sm" 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            // onDoubleClick= {() => }
        >
            <div className="playlist-card-sm-img mr-3 ml-1">
                <img src="https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg" />
            </div>
            <div className="playlist-card-sm-title">
                Playlist 1
            </div>
            {hovered && 
                <PlayCircleFilledIcon fontSize="large" className="playlist-card-sm-playicon"/>
            }
        </div>
    )
}

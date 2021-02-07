import React, {useState} from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import './PlaylistCardSm.scss';

export default function PlaylistCardSm(props) {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            data-testid="card-sm"
            className="playlist-card-sm" 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            // onDoubleClick= {() => }
        >
            <div className="playlist-card-sm-img mr-3 ml-1">
                <img alt="album cover art" src={props.song.preview} />
            </div>
            <div className="playlist-card-sm-title">
                {props.title}
            </div>
            {hovered && 
                <PlayCircleFilledIcon data-testid='play-button' fontSize="large" className="playlist-card-sm-playicon"/>
            }
        </div>
    )
}

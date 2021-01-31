import React, {useState} from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import playIcon from '../../../images/sound.gif'

export default function PlaylistRow({index, song, isPlaying, handlePlay, currentSong}) {
    const [hovered, setHovered] = useState(false);
    return (
        <tr 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onDoubleClick= {() => handlePlay(song)}
        >
            <td>
                {currentSong.id === song.id ? (
                    hovered ? 
                    <PauseCircleFilledIcon />
                    :
                    <img src={playIcon} alt="sound icon" style={{width: '25px'}}/>
                ) : (
                    hovered ?
                    <PlayArrowIcon fontSize="medium" onClick={() => handlePlay(song)} />
                    :
                    <span className="mr-2">{index + 1}</span> 

                )}
            </td>
            <td>
                <img src={song.album.cover_small} alt="album cover art" className="mr-2"/>
                {song.title}
            </td>
            <td><FavoriteBorderIcon/></td>
            <td>{song.duration}</td>
        </tr>
    )
}

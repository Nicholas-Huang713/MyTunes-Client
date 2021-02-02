import React, {useState} from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import sound from '../../../images/sound.gif'

export default function PlaylistRow({index, song, isPlaying, handleSelectSong, handlePauseSong, handleLikeSong, handleUnlikeSong, currentSong, compareSong, faveIdList}) {
    const [hovered, setHovered] = useState(false);
    return (
        <tr 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onDoubleClick= {() => handleSelectSong(song)}
        >
            <td>
                {compareSong && compareSong.id === song.id ? (
                    hovered ? 
                    <PauseCircleFilledIcon onClick={handlePauseSong}/>
                    :
                    <img src={sound} alt="sound icon" style={{width: '25px'}}/>
                ) : (
                    hovered ?
                    <PlayArrowIcon onClick={() => handleSelectSong(song)} />
                    :
                    <span className="mr-2">{index + 1}</span> 
                )}
            </td>
            <td>
                <img src={song.album.cover_small} alt="album cover art" className="mr-2"/>
                {song.title}
            </td>
            <td>
                {faveIdList.includes(song.id) ? 
                    <FavoriteIcon onClick={() => handleUnlikeSong(song)}/>
                    :
                    <FavoriteBorderIcon onClick={() => handleLikeSong(song)}/>
                }
            </td>
            <td>{`${song.duration.toString()[0]} : ${song.duration.toString()[1]}${song.duration.toString()[2]}`}</td>
        </tr>
    )
}

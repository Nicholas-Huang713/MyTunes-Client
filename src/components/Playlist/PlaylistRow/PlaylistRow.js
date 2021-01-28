import React, {useState} from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export default function PlaylistRow({index, song, isPlaying, handlePlay}) {
    const [hovered, setHovered] = useState(false);
    return (
        <tr 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onDoubleClick= {() => handlePlay(song)}
        >
            <td>
                {hovered ? 
                    <PlayArrowIcon fontSize="medium" onClick={() => handlePlay(song)} />
                    :
                    <span className="mr-2">{index + 1}</span>
                }
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

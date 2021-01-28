import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


export default function PlaylistRow({index, song}) {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <img src={song.album.cover_small} alt="album cover art" className="mr-2"/>
                {song.title}
            </td>
            <td><FavoriteBorderIcon/></td>
            <td>{song.duration}</td>
        </tr>
    )
}

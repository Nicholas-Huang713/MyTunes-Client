import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './SongModal.scss';

export default function SongModal({song, handleLikeSong, handleUnlikeSong, setMoreClicked, faveIdList}) {
    return (
        <div className="song-modal text-center">
            <div>
                <img src={song.album.cover_medium} alt="album cover"/>
                <br/>
                <div className="mt-2 song-modal__title">
                    {song.title}
                    <br/>
                    <span>{song.artist.name}</span>
                </div>
                <ul className="mt-3">
                    <li>
                        {faveIdList.includes(song.id) ? 
                            <button onClick={() => handleUnlikeSong(song.id)}><FavoriteIcon /> Unlike</button>
                            :
                            <button onClick={() => handleLikeSong(song)}><FavoriteBorderIcon /> Like</button>
                        }
                    </li>
                    <li className="mt-2"> 
                        <button>Add to playlist</button>
                    </li>
                    <li className="mt-5" onClick={() => setMoreClicked(false)}>
                        <button className="font-weight-bold">Close</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

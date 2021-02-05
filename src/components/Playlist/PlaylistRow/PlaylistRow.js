import React, {useState, useRef} from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import sound from '../../../images/sound.gif'
import './PlaylistRow.scss';

export default function PlaylistRow({index, song, handleSelectSong, handlePauseSong, handleLikeSong, handleUnlikeSong, handleMoreClick, compareSong, faveIdList}) {
    const target = useRef(null);
    const [hovered, setHovered] = useState(false);
    const [show, setShow] = useState(false);
    const [toolText, setToolText] = useState('');

    const handleLikeClick = () => {        
        handleLikeSong(song);
        setShow(true);
        setToolText('Added to favorites')
        setTimeout(() => {
            setShow(false)
        }, 1000)
    }

    const handleUnlikeClick = () => {
        handleUnlikeSong(song.id);
        setShow(true);    
        setToolText('Removed from favorites')
        setTimeout(() => {
            setShow(false)
        }, 1000)
    }

    const playStyle = {
        width: '25px'
    }

    return (
        <tr 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onDoubleClick= {() => handleSelectSong(song)}
        >
            <td className="playlist__row__display">
                {compareSong && compareSong.id === song.id ? (
                    hovered ? 
                    <PauseCircleFilledIcon onClick={handlePauseSong} style={playStyle}/>
                    :
                    <img src={sound} alt="sound icon" style={playStyle}/>
                ) : (
                    hovered ?
                    <PlayArrowIcon onClick={() => handleSelectSong(song)} style={playStyle} />
                    :
                    <span className="mr-2">{index + 1}</span> 
                )}
            </td>
            <td>
                <div className="playlist__row__titlewrapper">
                    <div>
                        <img src={song.album.cover_small} alt="album cover art" className="mr-2"/>
                        {song.title}
                    </div> 
                    <div className="playlist__row__moreicon">
                        <MoreHorizIcon onClick={() => handleMoreClick(song)} />
                    </div>
                </div>
                
            </td>
            <td className="playlist__row__display">
                {faveIdList.includes(song.id) ? 
                    <FavoriteIcon ref={target} onClick={() => handleUnlikeClick()}/>
                    :
                    <FavoriteBorderIcon ref={target} onClick={() => handleLikeClick()}/>
                }
                <Overlay target={target.current} show={show} placement="bottom">
                    {(props) => (
                    <Tooltip id="overlay-example" {...props} transition={true} >
                        {toolText}
                    </Tooltip>
                    )}
                </Overlay>
            </td>
            <td className="playlist__row__display">{`${song.duration.toString()[0]} : ${song.duration.toString()[1]}${song.duration.toString()[2]}`}</td>
        </tr>
    )
}

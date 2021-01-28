import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BotNav from '../../components/BotNav/BotNav';
import Player from '../../components/Player/Player';
import './SideBar.scss';
import {useHistory} from 'react-router-dom';

export default function SideBar({children}) {
    let history = useHistory();
    return (
        <>
            <ListGroup className="side-nav">
                <ListGroup.Item>
                    <ListGroup variant="flush">
                        <ListGroup.Item action onClick={() => history.push('/dashboard')}><HomeIcon className="mr-1"/>Home</ListGroup.Item>
                        <ListGroup.Item action onClick={() => history.push('/search')}><SearchIcon className="mr-1"/>Search</ListGroup.Item>
                        <ListGroup.Item action onClick={() => history.push('/')}><LibraryMusicIcon className="mr-1"/>Your Library</ListGroup.Item>
                        <ListGroup.Item action onClick={() => history.push('/')}><LibraryAddIcon className="mr-1"/>Create Playlist</ListGroup.Item>
                        <ListGroup.Item action onClick={() => history.push('/')}><FavoriteIcon className="mr-1"/>Liked Songs</ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                    <ListGroup variant="flush">
                        <ListGroup.Item action><HomeIcon className="mr-1"/>Home</ListGroup.Item>
                        <ListGroup.Item action><SearchIcon className="mr-1"/>Search</ListGroup.Item>
                        <ListGroup.Item action><LibraryMusicIcon className="mr-1"/>Your Library</ListGroup.Item>
                        <ListGroup.Item action><LibraryAddIcon className="mr-1"/>Create Playlist</ListGroup.Item>
                        <ListGroup.Item action><FavoriteIcon className="mr-1"/>Liked Songs</ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
            <div className="content">{children}</div>
            <Player />
            <BotNav/>
        </>
    )
}

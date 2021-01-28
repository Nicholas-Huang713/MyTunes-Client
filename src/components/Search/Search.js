import React, {useState} from 'react';
import Playlist from '../../components/Playlist/Playlist';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './Search.scss';
import {searchMusic} from '../../store/actions/songActions';
import { useDispatch, useSelector } from 'react-redux';

export default function Search() {
    const dispatch = useDispatch();
    const searchList = useSelector(state => state.song.searchList);
    const [inputText, setInputText] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if(e.key === 'Enter') {
            e.preventDefault();
            dispatch(searchMusic(inputText));
            setInputText('');
        }
    }

    return (
        <div className="search">
            <InputGroup className="mb-3 search__input" size="sm">
                <FormControl
                    placeholder="Search for Song, Artist or Album"
                    aria-label="Search for Song, Artist or Album"
                    aria-describedby="search music"
                    onKeyUp={handleSearch}
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    list="music-search"
                />
                <datalist id="music-search">
                    <option value="Boston"/>
                    <option value="Cambridge"/>
                </datalist>
                <InputGroup.Append>
                    <Button variant="secondary" onClick={handleSearch}>Button</Button>
                </InputGroup.Append>
                
            </InputGroup>
            

            <div className="search__list">
                <Playlist searchList={searchList}/>
            </div>
        </div>
    )
}

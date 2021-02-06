import { render, cleanup, fireEvent, screen, waitFor, act, getByTestId} from '@testing-library/react';
import PlaylistRow from './PlaylistRow';
// import { renderHook, act } from '@testing-library/react-hooks'
// import { act } from 'react-dom/test-utils';
afterEach(cleanup);

const props = {
    handleSelectSong: jest.fn(),
    handlePauseSong: jest.fn(),
    handleLikeSong: jest.fn(),
    handleUnlikeSong: jest.fn(),
    handleMoreClick: jest.fn(),
    index: 1,
    key: "12344",
    song: {
        id: "1234",
        title: "hello",
        album: {
            cover_small: "/img"
        },
        duration: "1:00"
    },
    compareSong: {
        id: "1234",
        title: "hello",
        album: {
            cover_small: "/img"
        },
        duration: "1:00"
    },
    currentSong: {
        id: "1234",
        title: "hello",
        album: {
            cover_small: "/img"
        },
        duration: "1:00"
    },
    faveIdList: ['12345', '3456','563434']
}


describe('<PlaylistRow />', () => {
    it('renders with props', () => {
        const table = document.createElement('table');
        const { container } = render(
            <tbody>
                <PlaylistRow 
                    key={props.key} 
                    song={props.song} 
                    currentSong={props.currentSong} 
                    compareSong={props.compareSong} 
                    index={props.index} 
                    handleSelectSong={props.handleSelectSong} 
                    handlePauseSong={props.handlePauseSong} 
                    handleLikeSong={props.handleLikeSong} 
                    handleUnlikeSong={props.handleUnlikeSong} 
                    faveIdList={props.faveIdList} 
                    handleMoreClick={props.handleMoreClick}
                />
            </tbody>, {
            container: document.body.appendChild(table),
          })
    })  

    it('like button works', async () => {
        const table = document.createElement('table');
        const { container, getByTestId } = render(
            <tbody>
                <PlaylistRow 
                    key={props.key} 
                    song={props.song} 
                    currentSong={props.currentSong} 
                    compareSong={props.compareSong} 
                    index={props.index} 
                    handleSelectSong={props.handleSelectSong} 
                    handlePauseSong={props.handlePauseSong} 
                    handleLikeSong={props.handleLikeSong} 
                    handleUnlikeSong={props.handleUnlikeSong} 
                    faveIdList={props.faveIdList} 
                    handleMoreClick={props.handleMoreClick}
                />
            </tbody>, {
            container: document.body.appendChild(table),
        })
        
        const likeBtn = screen.getByTestId('like-button');
        fireEvent.click(likeBtn);
          
        await waitFor(() => {
            expect(getByTestId('like-button')).toBeInTheDocument()
        })
        expect(props.handleLikeSong).toBeCalled();
    })

    // it('unlike button works', () => {

    // })
    // it('unlike button works', () => {

    // })
    // it('play button works', () => {

    // })
    // it('pause button works', () => {

    // })

})
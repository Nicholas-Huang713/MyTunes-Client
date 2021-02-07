import { render, cleanup, fireEvent, screen, waitFor} from '@testing-library/react';
import PlaylistRow from './PlaylistRow';

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
    faveIdList: ['1234', '3456','563434']
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

    describe('buttons', () => {
        it('like button works', async () => {
            const table = document.createElement('table');
            const { container, getByTestId, queryByTestId } = render(
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
            
            const likeBtn = queryByTestId('unlike-button');
            expect(likeBtn).toBeInTheDocument();
            // fireEvent.click(likeBtn);
              
            // await waitFor(() => {
            //     expect(queryByTestId('unlike-button')).toBeInTheDocument()
            // })
            // expect(props.handleLikeSong).toBeCalled();
        })
    
        // it('unlike button works', () => {
    
        // })
        // it('unlike button works', () => {
    
        // })
        // it('play button works', () => {
    
        // })
        // it('pause button works', () => {
    
        // })        
    });
    


})
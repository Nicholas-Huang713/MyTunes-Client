import { render, cleanup, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PlaylistCardSm from './PlaylistCardSm';

afterEach(cleanup);

const props = { title: "My Playlist 1", song: {preview: "/img.jpg"}}

describe('<PlaylistCardSm />', () => {

    it('should match snapshot', () => {
        const { asFragment } = render(<PlaylistCardSm {...props}/>);
        expect(asFragment()).toMatchSnapshot();
      });

    it('should render with props', () => {
        
        const {getByAltText, getByText, queryByTestId} = render(<PlaylistCardSm {...props}/>);
        expect(getByAltText('album cover art').getAttribute('src')).toBe('/img.jpg');
        expect(getByText('My Playlist 1')).toBeInTheDocument()
        expect(queryByTestId('play-button')).not.toBeInTheDocument()
    });

    it('should render play button when hovered', async () => {
        const {queryByTestId} = render(<PlaylistCardSm {...props}/>);
        // let trigger = 
        expect(queryByTestId('play-button')).not.toBeInTheDocument()
        const trigger = queryByTestId('card-sm');
        userEvent.hover(trigger);
        expect(queryByTestId('play-button')).toBeInTheDocument()
        userEvent.unhover(trigger);
        expect(queryByTestId('play-button')).not.toBeInTheDocument()
    });
    

    
});

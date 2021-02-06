import { render, cleanup, screen, getByTestId} from '@testing-library/react';
import RegForm from './RegForm';

afterEach(cleanup);

describe('<RegForm />', () => {
    it('renders without crashing', () => {
        render(<RegForm />)
    }) 

    it('should render basic fields', () => {
        render(<RegForm />)
        expect(screen.getByLabelText("First Name")).toBeInTheDocument()
        expect(screen.getByLabelText("Last Name")).toBeInTheDocument()
        expect(screen.getByLabelText("UserName")).toBeInTheDocument()
        expect(screen.getByLabelText("Email Address")).toBeInTheDocument()
        expect(screen.getByLabelText("Password")).toBeInTheDocument()

        expect(screen.getByRole("textbox", {name: /first-name/i})).toBeInTheDocument()
    })

    it('should validate form fields', () => {
        const mockSave = jest.fn();
        render(<RegForm handleSubmit={mockSave} />);
        fireEvent.input(screen.getByLabelText("First Name"))
    })
});

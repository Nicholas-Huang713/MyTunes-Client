import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import RegForm from './RegForm';

afterEach(cleanup);

describe('<RegForm />', () => {
    it('renders without crashing', () => {
        render(<RegForm />)
    }) 

    it('should render basic fields', () => {
        const {getByRole, getByLabelText} = render(<RegForm />)
        expect(getByLabelText("First Name")).toBeInTheDocument()
        expect(getByLabelText("Last Name")).toBeInTheDocument()
        expect(getByLabelText("UserName")).toBeInTheDocument()
        expect(getByLabelText("Email Address")).toBeInTheDocument()
        expect(getByLabelText("Password")).toBeInTheDocument()
        expect(getByRole("button", {name: /Submit/i})).toBeInTheDocument()
    })

    it('should validate form fields', async () => {
        const mockSave = jest.fn();
        const { getByLabelText, getByRole, findAllByText, findAllByRole, queryAllByText } = render(<RegForm handleSubmit={mockSave} />);
        fireEvent.input(getByLabelText("First Name"), {
            target: { 
                value: "nick"
            }
        })
        fireEvent.input(getByLabelText("Last Name"), {
            target: {
                value: "huang"
            }
        })
        fireEvent.input(getByLabelText("UserName"), {
            target: {
                value: "nickhuang"
            }
        })
        fireEvent.input(getByLabelText("Email Address"), {
            target: {
                value: "n@huang.com"
            }
        })
        fireEvent.input(getByLabelText("Password"), {
            target: {
                value: "123456"
            }
        })
        fireEvent.submit(getByRole('button', {name: /Submit/i}));
        expect(await queryAllByText(/Please provide a valid/i)).toHaveLength(5)
        expect(mockSave).toBeCalled();
    })
});

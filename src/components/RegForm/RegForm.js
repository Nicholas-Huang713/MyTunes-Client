import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './RegForm.scss';

export default function RegForm({handleSubmit}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            firstName, lastName, email, userName, password
        };
        console.log(newUser);
        handleSubmit(newUser);
        resetInputs();
    }

    const resetInputs = () => {
        setFirstName('')
        setLastName('')
        setUserName('')
        setEmail('')
        setPassword('')
    }

    return (
        <Form className="reg-form" onSubmit={handleOnSubmit}>
            <div className="reg-form-title">Register Here</div>
            <div className="reg-form-content">
                <Form.Group >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        // id="firstname"
                        required
                        type="text" 
                        placeholder="Enter first name" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">First name is required!</Form.Control.Feedback>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control  
                        // id="lastname"
                        required
                        type="text" 
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <Form.Label>UserName</Form.Label>
                    <Form.Control 
                        // id="username"
                        required
                        type="text" 
                        placeholder="Enter User Name" 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        // id="email"
                        required
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        // id="password"
                        required
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    )
}

import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UserForm = () => {
  return (
    <div className='container'>
        <Form>
            {/* ユーザー名： */}
            <Form.Group controlId="formBasic Name">
                <Form.Label>ユーザー名</Form.Label>
                <Form.Control type="text" placeholder="Enter UserName" />
                <Form.Text className="text-muted">
                    ユーザー名は20文字までです
                </Form.Text>
            </Form.Group>

            {/* ユーザー名： */}
            <Form.Group controlId="formBasicEmail">
                <Form.Label>メールアドレス</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
    </div>
  );
}

export default UserForm
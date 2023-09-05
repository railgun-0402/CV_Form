import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './UserForm.scss';

const UserForm = () => {
  return (
    <div className='container'>
        <Form>
            <div className='userTable'>
                {/* ユーザー名 */}
                <Form.Group controlId="formBasic Name">
                    <Form.Label>ユーザー名</Form.Label>
                    <Form.Control type="text" placeholder="Enter UserName" />
                    <Form.Text className="text-muted">
                        ユーザー名は20文字以内で設定してください
                    </Form.Text>
                </Form.Group>
            </div>

            <div className='emailAddress'>
            {/* メールアドレス */}
            <Form.Group controlId="formBasicEmail">
                <Form.Label>メールアドレス</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
            </div>

            <div className='userTel'>
            {/* 電話番号 */}
            <Form.Group controlId="formBasicTel">
                <Form.Label>電話番号</Form.Label>
                <Form.Control type="text" placeholder="Enter Telephone Number" />
            </Form.Group>
            </div>

            <div className='pass'>
            {/* パスワード */}
            <Form.Group controlId="formBasicPassword">
                <Form.Label>パスワード</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />

                <Form.Text className="text-muted">
                    パスワードは8文字以上16文字までで設定してください
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            </div>

            <div className='btn'>
            {/* ボタン： */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </div>
        </Form>
    </div>
  );
}

export default UserForm
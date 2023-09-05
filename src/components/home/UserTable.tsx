import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const UserTable = () => {
  return (
    <div className='container'>
      <div className='mt-4'>
      <Table striped bordered hover variant="dark">
          <thead>
              <tr>
                  <th>ユーザー名</th>
                  <th>メールアドレス</th>
                  <th>電話番号</th>
                  <th>設定</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>山田 太郎</td>
              <td>yamada@email.com</td>
              <td>090-1111-2222</td>
              <td>
                <Button variant="outline-secondary">編集</Button>
                <Button variant="outline-danger">削除</Button>
              </td>
            </tr>
            <tr>
              <td>長谷川 大和</td>
              <td>hasegawa@email.com</td>
              <td>090-4123-2452</td>
              <td>
                <Button variant="outline-secondary">編集</Button>
                <Button variant="outline-danger">削除</Button>
              </td>
            </tr>
          </tbody>
      </Table>
      </div>
    </div>

  )
}

export default UserTable
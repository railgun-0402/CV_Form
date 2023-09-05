import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import UserTable from './UserTable';
import UserForm from './UserForm';

const Home = () => {    
  return (
    <div>
      <UserForm />
      <UserTable />
    </div>

  );
}

export default Home;
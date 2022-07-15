import React, { useEffect, useState } from 'react';
import Spinner from '../Components/spinner/Spinner';
import { UserCards } from '../Components/Users/UserCards';
import UsersSearch from '../Components/Users/UsersSearch';
import { useActions } from '../hooks/useActions';
import { useSearch } from '../hooks/useSearch';
import { useTypedSelector } from '../hooks/useTypedSelectors';

const Users = () => {
  
  const [showUserForm, setShowUserForm] = useState(false);
  // const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState('');
  
  const {users} = useTypedSelector(state => state.users);
  const searchedUser = useSearch(users, search);
  const {getUsers} = useActions();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-5">Users:</h1>
        <UsersSearch setSearch={setSearch} />
        <button
          type="button"
          className="btn btn-outline-secondary mb-5"
          onClick={() => setShowUserForm(!showUserForm)}
        >
          Add users
        </button>
        {/* {showUserForm && <AddUser users={users} setUsers={setUsers} />} */}
      </div>
      {users.length ? (
        <UserCards users={searchedUser} 
        />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Users;

/* eslint-disable no-plusplus */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import usersService from '../../API/services/usersService';
import Users from '../Users/Users';
import usePagination from '../../hooks/usePagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchUsers.css';

const PAGE_SIZE = 8;
function SearchUsers() {
  const [users, setUsers] = useState({});
  const [userInput, setUserInput] = useState('');
  const handleClick = async () => {
    try {
      const response = await usersService.getUsers(userInput);
      setUsers({ ...users, ...response });
    } catch (error) {
      console.log(error);
    }
  };
  const {
    paginatedData,
    page,
    setPage,
  } = usePagination(users?.items, PAGE_SIZE);
  return (
    <div className="container">
      <div className="container-search">
        <h1>Сервис поиска пользователей GitHub</h1>
        <div className="search-control">
          <input className="form-control search-control_input" onChange={(event) => setUserInput(event.target.value)} type="text" placeholder="Введите логин пользователя" />
          <button className="btn btn-primary" onClick={() => handleClick()} type="submit">Поиск</button>
        </div>
      </div>
      <Users users={paginatedData} />
      <Pagination users={users?.items} pageSize={PAGE_SIZE} page={page} setPage={setPage} />
    </div>
  );
}

export default SearchUsers;

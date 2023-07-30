import React, { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import usersService from '../../API/services/usersService';
import Users from '../Users/Users';
import usePagination from '../../hooks/usePagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchUsers.css';

const PAGE_SIZE = 8;
function SearchUsers() {
  const [users, setUsers] = useState([]);
  const [searchUserValue, setsearchUserValue] = useState('');
  const [showError, setShowError] = useState(false);
  const [showNoUsers, setShowNoUsers] = useState(false);
  const handleSearch = async () => {
    try {
      const response = await usersService.getUsers(searchUserValue);
      setUsers([...response.items]);
      setShowError(false);
      console.log(response);
      if (response.items.length === 0) {
        setShowNoUsers(true);
      }
    } catch (error) {
      setShowError(true);
      setUsers([]);
    }
  };
  const {
    paginatedData,
    page,
    setPage,
  } = usePagination(users, PAGE_SIZE);
  const handleUserInputPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  console.log(users);
  return (
    <div className="container">
      <div className="container-search">
        <h1>Сервис поиска пользователей GitHub</h1>
        <div className="search-control">
          <div className="search-control-sub">
            <input
              className="form-control search-control_input"
              onKeyPress={handleUserInputPress}
              onChange={(event) => {
                setsearchUserValue(event.target.value);
                setShowError(false);
                setShowNoUsers(false);
              }}
              type="text"
              placeholder="Введите логин пользователя"
            />
            {!showError ? null : (
              <div className="was-validated">
                Пожалуйста, введите имя пользователя.
              </div>
            )}
          </div>
          <div className="search-control_button">
            <button
              className="btn btn-secondary"
              onClick={() => {
                handleSearch();
                setPage(1);
              }}
              type="submit"
            >
              Поиск

            </button>
          </div>
        </div>
      </div>
      {!showNoUsers ? null
        : (
          <div className="was-validated">
            Пользователей с таким именем не найдено.
          </div>
        )}
      <Users users={paginatedData} />
      <Pagination users={users} pageSize={PAGE_SIZE} page={page} setPage={setPage} />
    </div>
  );
}

export default SearchUsers;

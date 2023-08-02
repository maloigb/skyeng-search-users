import DropdownBootstrap from 'react-bootstrap/Dropdown';
import DropdownButtonBootstrap from 'react-bootstrap/DropdownButton';
import sortArrayByField from '../../system/helpers';
import './Dropdown.css';

function Dropdown({ users, setUsers }) {
  const handleSortClick = (field, direction) => {
    const sortedUsers = sortArrayByField(users, field, direction);
    setUsers(sortedUsers);
  };
  return (
    <div className="dropdown-container">
      <DropdownButtonBootstrap id="dropdown-item-button" title="Сортировка">
        <DropdownBootstrap.ItemText>
          <strong>По количеству репозиториев</strong>
        </DropdownBootstrap.ItemText>
        <DropdownBootstrap.Item onClick={() => handleSortClick('reposLength', false)} as="button">От большего</DropdownBootstrap.Item>
        <DropdownBootstrap.Item onClick={() => handleSortClick('reposLength', true)} as="button">От меньшего</DropdownBootstrap.Item>
      </DropdownButtonBootstrap>
    </div>
  );
}

export default Dropdown;

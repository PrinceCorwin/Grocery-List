import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleDelete, handleCheck }) => {
  return (
    <li className='item'>
      <input
        type='checkbox'
        // the following onChange call must use anonymous function format so we can pass an argument without the handleCheck function executing immediately. onChange={handleCheck(item.id)} would fire off immediately without user interaction
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        onDoubleClick={() => handleCheck(item.id)}
        style={
          item.checked ? { textDecoration: 'line-through', color: 'red' } : null
        }
      >
        {item.item}
      </label>
      <FaTrashAlt
        role='button'
        tabIndex='0'
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;

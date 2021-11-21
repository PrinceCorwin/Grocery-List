import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleDelete, handleCheck }) => {
  // const itemDate = item.date.toDate();
  // const dateStr = `${
  //   itemDate.getMonth() + 1
  // }/${itemDate.getDate()}/${itemDate.getFullYear()}`;
  return (
    <li className='item'>
      <input
        type='checkbox'
        checked={item.checked}
        // the following onChange call must use anonymous function format so we can pass an argument without the handleCheck function executing immediately. onChange={handleCheck(item.id)} would fire off immediately without user interaction
        onChange={() => handleCheck(item.id)}
      />
      <label
        onDoubleClick={() => handleCheck(item.id)}
        style={
          item.checked ? { textDecoration: 'line-through', color: 'red' } : null
        }
      >
        <div>{item.desc}</div>
        <div className='dateAuthor'>
          <span>Added {item.date}</span>
          <span> by: {item.author}</span>
        </div>
      </label>
      <FaTrashAlt
        role='button'
        tabIndex='0'
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.desc}`}
      />
    </li>
  );
};

export default LineItem;

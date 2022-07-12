import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';

export const Content = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            body: 'bread'
        }, {
            id: 2,
            checked: false,
            body: 'onion'
        }
    ]);

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('ShoppingList', JSON.stringify(listItems))
    }
    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('ShoppingList', JSON.stringify(listItems))
    }

    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li key={item.id} className='item'>
                            <input type='checkbox'
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.body}</label>
                            <FaTrashAlt role='button' tabIndex='0' onClick={() => handleDelete(item.id)} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty</p>
            )}
        </main>
    )
}
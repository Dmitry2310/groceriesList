import { Footer } from './Components/Footer';
import { Content } from './Components/Content';
import { Header } from './Components/Header';
import { useState } from 'react';
import { AddItem } from './Components/AddItem';
import { Search } from './Components/Search';


function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('ShoppingList')) ||
    [{
      id: 1,
      checked: false,
      body: 'bread'
    }]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const saveAndSetItems = (listItems) => {
    setItems(listItems);
    localStorage.setItem('ShoppingList', JSON.stringify(listItems))
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id,
      checked: false,
      body: item
    }
    const listItems = [...items, myNewItem];
    saveAndSetItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    saveAndSetItems(listItems);
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    saveAndSetItems(listItems);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className='app'>
      <Header title='Grocery List' />
      <Search search={search} setSearch={setSearch} />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <Content items={items.filter(item => ((item.body).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;

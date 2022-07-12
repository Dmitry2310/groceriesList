import { Footer } from './Components/Footer';
import { Content } from './Components/Content';
import { Header } from './Components/Header';


function App() {
  return (
    <div className='app'>
      <Header title='Grocery List' />
      <Content />
      <Footer length={2} />
    </div>
  );
}

export default App;

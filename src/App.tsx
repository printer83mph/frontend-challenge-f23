import Nav from './components/nav';
import Courses from './components/courses';
import Cart from './components/cart';

// TODO: fix
import 'normalize.css/normalize.css';

function App() {
  return (
    <>
      <Nav />
      <div>
        <Courses />
        <Cart />
      </div>
    </>
  );
}

export default App;

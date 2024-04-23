"use client"
import Header from './components/Header';
import Cart from './components/Cart';
import { CartProvider } from '../app/management/context';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
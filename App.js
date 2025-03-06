import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductTodo from "./components/ProductTodo";

function App() {
  return (
      <div className="App">
        <h1>Product Management</h1>
        <Routes>
          <Route path="/" element={<ProductForm />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/todo" element={<ProductTodo />} /> 
        </Routes>
      </div>
  );
}

export default App;

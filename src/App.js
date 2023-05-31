import logo from './logo.svg';
import './App.css';
import ProductForm from './pages/CreateProduct';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/404';
import ProductTable from './pages/ProductTable';
import MyEditor from './pages/MyEditor';
import Movies from './pages/Movies';
import About from './pages/About';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Category from './pages/Category';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<ProductForm update={false} />} />
          <Route path='/update' element={<ProductForm update={true} />} />
          <Route path='/datatable' element={<ProductTable />} />
          <Route path='/editor' element={<MyEditor />} />
          <Route path='/movies' element={<Movies />}/>
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Category />} />
          {/* <Route path='/category/:id' element={<Category />} /> */}
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

function Dashboard(){
  return(
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  )
}

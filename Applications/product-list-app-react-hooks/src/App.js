import React, { useState } from 'react';
import ProductItem from './components/ProductItem'
import './App.css';

export const SearchKeyContext = React.createContext('');
const App = () => {
  const [searchKey, setSearchKey] = useState('');
  const onSearch=(e)=>{
   var text= e.target.value;
   setSearchKey(text);
  }
  return (
    <SearchKeyContext.Provider value={searchKey}>
      <div>
        <header>
          <nav className="navbar navbar-light" style={{ boxShadow: "0 4px 2px -2px rgba(0, 0, 0, 0.2)" }}>
            <form className="form-inline mt-2">
              <input className="form-control mr-sm-2"
               type="search" placeholder="Search"
                aria-label="Search" 
                onChange={onSearch}/>
              <i className="fa fa-search my-2 my-sm-0" ></i>
            </form>
          </nav>
        </header>
        <div className="container">
          <div className='row mt-3'>
            <div className='col-md-12'>
              <h2>product list page</h2>
            </div>
            <div className='col-md-10 p-4' style={{ backgroundColor: "#eee", borderRadius: ".5rem", }}>
              <ProductItem></ProductItem>
            </div>
          </div>
        </div>
      </div>
    </SearchKeyContext.Provider>
  )
}
export default App;
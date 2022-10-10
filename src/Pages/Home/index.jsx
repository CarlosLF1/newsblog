import React from 'react'
import Header from '../../Components/Home/Header'
import SearchBar from '../../Components/Home/SearchBar';

const Home = () => {
  return (
    <div>
      {/* Page Header */}
      <Header />
          
      {/* Search Bar  */}
      <SearchBar />
        {/* // value={searchKey} */}

      {/* Blog List & Empty List */}
    </div>
  );
};

export default Home;
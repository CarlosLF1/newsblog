import React from 'react'
import Header from '../../Components/Home/Header'
import SearchBar from '../../Components/Home/SearchBar';
import BlogList from '../../Components/Home/BlogList';

const Home = () => {
  return (
    <div>
      {/* Page Header */}
      <Header />
          
      {/* Search Bar  */}
      <SearchBar />
        {/* // value={searchKey} */}

      {/* Blog List & Empty List */}
      <BlogList blogs={} />
    </div>
  );
};

export default Home;
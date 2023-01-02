import React from 'react'
import Header from '../../Components/Home/Header'
import SearchBar from '../../Components/Home/SearchBar';
import BlogList from '../../Components/Home/BlogList';
import { blogList } from "../../config/data";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

    // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

   // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}
      <Header />
          
      {/* Search Bar  */}
      <SearchBar
        value={searchKey}
        clearSearchKey={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
        {/* // value={searchKey} */}

      {/* Blog List & Empty List */}
      <BlogList blogs={blogList} />
    </div>
  );
};

export default Home;
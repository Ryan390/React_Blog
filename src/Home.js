import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
const [blogs, setBlogs] = useState([
  {title: 'Hello website!', body: 'lorem ipsum...', author: 'mario', id:1},
  {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id:2},
  {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id:3},
])

const handleDelete = (id) => {
  console.log(id);
}

  return (
    <div className="home"> 
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
    </div>
  );
};

export default Home;

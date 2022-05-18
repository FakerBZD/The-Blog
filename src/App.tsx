import AllBlogs from "containers/AllBlogs/AllBlogs";
import Layout from "containers/Layout/Layout";
import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./containers/Blog/Blog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            {/* <Route path="/blogs" element={<SignUp />} />
            <Route path="/add-blog" element={<Login />} /> */}
            <Route path="blog" element={<Blog />} />
            <Route path="all-blogs" element={<AllBlogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "../../css/addform.css";
import axios from "axios";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:8080";
const categoryURL = `${baseURL}/categories`;
const addCategoryURL = `${baseURL}/addCategory`;

function AddCat() {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      name: formData.name,
    };

    axios
      .post(addCategoryURL, requestData)
      .then((response) => {
        alert("Category added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding category:", error);
        alert("Error adding category. Please check the console for details.");
      });
  };

  return (
    <div className="adpage">
      <header role="banner">
        <Link to="/">
          <h1>Admin Panel</h1>
        </Link>
        <ul className="utilities">
          <br />
          <li className="logout warn">
            <Link to="/Login" href="">
              Log Out
            </Link>
          </li>
        </ul>
      </header>
      <main role="main">
        <section className="panel important"></section>
        <nav role="navigation">
          <ul className="main">
            <li className="dashboard">
              <Link to="/Admin">Dashboard</Link>
            </li>
            <li className="users">
              <Link to="/">Home Page</Link>
            </li>
            <li className="edit">
              <Link to="/Admin">Products List</Link>
            </li>
            <li className="edit">
            <Link to="/Categorylist">Category List</Link>
          </li>
            <li className="write">
              <Link to="/Addprod">Add A Product</Link>
            </li>
            <li className="write">
              <Link to="/AddCat">Add Category</Link>
            </li>
          </ul>
        </nav>
        <div className="Contaddprod">
          <div className="donno2">
            <section>
              <h2>Add Category</h2>
              <form onSubmit={handleSubmit}>
                <div className="user-box">
                  <input
                    type="text"
                    name="name"
                    required=""
                    onChange={handleInputChange}
                  />
                  <label>Category Name</label>
                </div>
                <button className="subbut" type="submit">
                  Submit
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddCat;

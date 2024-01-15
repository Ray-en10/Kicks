import React, { useState, useEffect } from "react";
import "../../css/addform.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const baseURL = "http://localhost:8080";
const getCategoryURL = `${baseURL}/category`;

function UpdateCat() {
  const [formData, setFormData] = useState({
    name: "",
  });
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${getCategoryURL}/${id}`)
      .then((response) => {
        const categoryData = response.data;
        setFormData({
          name: categoryData.name,
        });
      })
      .catch((error) => {
        console.error("Error fetching category details:", error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      id_category: id, // Include the ID of the category
      name: formData.name,
    };

    axios
      .patch(`${baseURL}/updateCategory`, requestData)
      .then((response) => {
        alert("Category updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating category:", error);
        console.log("Error response data:", error.response.data);
        alert("Error updating category. Please check the console for details.");
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
            <h2>
              <b>Update Category</b>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="user-box">
                <input
                  type="text"
                  name="name"
                  required=""
                  onChange={handleInputChange}
                  value={formData.name}
                />
                <label>Name</label>
              </div>
              <button className="subbut" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UpdateCat;

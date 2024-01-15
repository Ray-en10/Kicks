import React, { useState, useEffect } from "react";
import "../../css/addform.css";
import axios from "axios";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:8080";
const categoryURL = `${baseURL}/category`;
const addProductURL = `${baseURL}/addProduct`;

function AddProd() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    lib: "",
    prix: "",
    qte: "",
    selectedCategory: "",
  });

  useEffect(() => {
    axios
      .get(categoryURL)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryChange = (e) => {
    setFormData({
      ...formData,
      selectedCategory: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      lib: formData.lib,
      prix: parseFloat(formData.prix),
      qte: parseInt(formData.qte),
      category: { id_category: parseInt(formData.selectedCategory) },
    };

    axios
      .post(addProductURL, requestData)
      .then((response) => {
        alert("Product added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        alert("Error adding product. Please check the console for details.");
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
              <h2>Product List</h2>
              <form onSubmit={handleSubmit}>
                <div className="user-box">
                  <input
                    type="text"
                    name="lib"
                    required=""
                    onChange={handleInputChange}
                  />
                  <label>Libelle</label>
                </div>
                <div className="user-box">
                  <input
                    type="text"
                    name="prix"
                    required=""
                    onChange={handleInputChange}
                  />
                  <label>Prix</label>
                </div>
                <div className="user-box">
                  <input
                    type="text"
                    name="qte"
                    required=""
                    onChange={handleInputChange}
                  />
                  <label>Quantié</label>
                </div>
                <select
                  name="selectedCategory"
                  id="pet-select"
                  className="selcat"
                  onChange={handleCategoryChange}
                >
                  <option value="">Select Category</option>
                  {posts.map((post) => (
                    <option key={post.id} value={post.id_category}>
                      {post.name}
                    </option>
                  ))}
                </select>
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

export default AddProd;

import React, { useState, useEffect } from "react";
import "../../css/addform.css";

import axios from "axios";
import { Link, useParams } from "react-router-dom";

const baseURL = "http://localhost:8080";
const getProductURL = `${baseURL}/product`;

function Updateprod() {
  const [formData, setFormData] = useState({
    lib: "",
    prix: "",
    qte: "",
    selectedCategory: null, // Set selectedCategory to null by default
  });
  const [categories, setCategories] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${getProductURL}/${id}`)
      .then((response) => {
        const productData = response.data;
        setFormData({
          lib: productData.lib,
          prix: productData.prix,
          qte: productData.qte,
          selectedCategory: null, // Set selectedCategory to null when fetching product details
        });
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });

    axios
      .get(`${baseURL}/category`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, [id]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const requestData = {
        lib: formData.lib,
        prix: parseFloat(formData.prix),
        qte: parseInt(formData.qte),
        category: null,
      };
  
      await axios.patch(`${baseURL}/updateProduct/${id}`, requestData);
  
      alert("Product updated successfully");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Error updating product. Please check the console for details.");
    }
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
              <Link to="/Addcat">Add Category</Link>
            </li>
          </ul>
        </nav>
        <div className="Contaddprod">
          <div className="donno2">
            <h2>
              <b>Update product</b>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="user-box">
                <input
                  type="text"
                  name="lib"
                  required=""
                  onChange={handleInputChange}
                  value={formData.lib}
                />
                <label>Libelle</label>
              </div>
              <div className="user-box">
                <input
                  type="number"
                  name="prix"
                  required=""
                  onChange={handleInputChange}
                  value={formData.prix}
                />
                <label>Prix</label>
              </div>
              <div className="user-box">
                <input
                  type="number"
                  name="qte"
                  required=""
                  onChange={handleInputChange}
                  value={formData.qte}
                />
                <label>Quantié</label>
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

export default Updateprod;

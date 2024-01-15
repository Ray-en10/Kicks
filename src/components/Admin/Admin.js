import React, { useEffect, useState } from "react";
import "../../css/admin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const baseURL = "http://localhost:8080/product";

function Admin() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        console.log("API Response:", response.data);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        console.log("Error details:", error.response);
      }
    };

    fetchData();
  }, []);

  const onDeleteProduct = async (productId) => {  
    console.log("id:", productId);
    try {
      await axios.delete(`${baseURL}/${productId}`);
      const updatedPosts = posts.filter(
        (post) => post.id_produit !== productId
      );
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error deleting product:", error);
      console.log("Error details:", error.response);
    }
  };

  const onUpdateProduct = (productId) => {
    navigate(`/Updateprod/${productId}`);
  };

  return (
    <div>
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

      <nav role="navigation">
        <ul className="main">
          <li className="dashboard">
          <Link to="/Admin">Dashboard</Link>
          </li>
          <li className="users">
          <Link to="/">Home Page</Link>
          </li>
          <li className="edit">
            <Link href="#">Products List</Link>
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

      <main role="main">
        <section className="panel important">
          <div>
            <h2 className="admspace">Admin Space</h2>
          </div>
        </section>

        <section className="panel important">
          <h2>Product List</h2>
          <table className="conttab">
            <thead>
              <tr>
                <th>Libelle</th>
                <th>Prix</th>
                <th>Quantié</th>
                <th></th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id_produit}>
                  <td>{post.lib}</td>
                  <td>{post.prix}</td>
                  <td>{post.qte}</td>
                  <td></td>
                  <td>
                    <button onClick={() => onUpdateProduct(post.id_produit)}>
                      Update
                    </button>
                    <button onClick={() => onDeleteProduct(post.id_produit)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Admin;

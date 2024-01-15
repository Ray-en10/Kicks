import React, { useEffect, useState } from "react";
import "../../css/admin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const baseURL = "http://localhost:8080/category"; // Update the API endpoint

function Categorylist() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        console.log("API Response:", response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        console.log("Error details:", error.response);
      }
    };

    fetchData();
  }, []);

  const onDeleteCategory = async (categoryId) => {
    console.log("id:", categoryId);
    try {
      await axios.delete(`${baseURL}/${categoryId}`);
      const updatedCategories = categories.filter(
        (category) => category.id_category !== categoryId
      );
      setCategories(updatedCategories);
    } catch (error) {
      console.error("Error deleting category:", error);
      console.log("Error details:", error.response);
    }
  };

  const onUpdateCategory = (categoryId) => {
    navigate(`/UpdateCat/${categoryId}`);
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

      <main role="main">
        <section className="panel important">
          <div>
            <h2 className="admspace">Admin Space</h2>
          </div>
        </section>

        <section className="panel important">
          <h2>Category List</h2>
          <table className="conttab">
            <thead>
              <tr>
                <th>Name</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id_category}>
                  <td>{category.name}</td>
                  <td>
                    <button
                      onClick={() => onUpdateCategory(category.id_category)}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => onDeleteCategory(category.id_category)}
                    >
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

export default Categorylist;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import AdminMenu from '../../components/layouts/AdminMenu';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import CategoryForm from '../../components/Form/CategorryForm';
import { Modal } from "antd";
const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/category/create-category", {
        name,
      });
      if (data?.success) {
        toast.success(`Category "${name}" added successfully`);
        getAllCategory();
        setName(""); // Clear the input field after submission
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in input form");
    }
  };

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting categories");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        toast.success(`Category "${updatedName}" updated successfully`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // Delete category
  const handleDelete = async (categoryId) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/category/delete-category/${categoryId}`
      );
      if (data.success) {
        toast.error(`Category deleted successfully`, { autoClose: 2000, className: 'red-toast' });
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // Edit category
  const handleEdit = (category) => {
    setSelected(category);
    setUpdatedName(category.name);
    setVisible(true);
  };

  return (
    <Container>
    <div className="container-fluid m-3 p-3">
       <div className="row">
         <div className="col-md-3">
           <AdminMenu />
         </div>
         <div className="col-md-9">
           <h1>Manage Category</h1>
           <div className="p-3 w-50">
             <CategoryForm
               handleSubmit={handleSubmit}
               value={name}
               setValue={setName}
             />
           </div>
           <div className="w-75">
             <table className="table">
               <thead>
                 <tr>
                   <th scope="col">Name</th>
                   <th scope="col">Actions</th>
                 </tr>
               </thead>
               <tbody>
                 {categories?.map((c) => (
                   <tr key={c._id}>
                     <td>{c.name}</td>
                     <td>
                     <button
  className="btn btn-primary ms-2"
  onClick={() => {
    setVisible(true);
    setUpdatedName(c.name);
    setSelected(c);
  }}
  style={{ width: '70px' }} // Adjust the width as needed
>
  Edit
</button>

                       <button
                         className="btn btn-danger ms-2"
                         onClick={() => {
                           handleDelete(c._id);
                         }}
                       >
                         Delete
                       </button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           <Modal
             onCancel={() => setVisible(false)}
             footer={null}
             visible={visible}
           >
             <CategoryForm
               value={updatedName}
               setValue={setUpdatedName}
               handleSubmit={handleUpdate}
             />
           </Modal>
         </div>
       </div>
     </div>
 </Container>
);
};
export default CreateCategory;

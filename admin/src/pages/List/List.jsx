import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  //to hold data from the backend
  const [list, setList] = useState([]);
  //function for retrive data from data base
  const fetchList = async () => {
    const res = await axios.get(`${url}/api/food/list`);

    if (res.data.success) {
      setList(res.data.data);
    } else {
      toast.error("Error Happend !");
    }
  };
  //function fir re=move items
  const removeFood = async (foodId) => {
    const res = await axios.post(`${url}/api/food/remove`, { id: foodId });
    //after delete fetch the data from data base
    await fetchList();
    if (res.data.success) {
      toast.success(res.data.message);
    } else {
      toast.error("Error Happend !");
    }
  };
  //run the function when ever page reloades
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-col">
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="image" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>$ {item.price}</p>
              <p onClick={() => removeFood(item._id)} className="cursor">
                x
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;

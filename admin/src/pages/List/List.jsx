import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({ url }) => {

    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`);
        if (response.data.success) {
            setList(response.data.data);
        }
        else {
            toast.error("Error")
        }
    }

    const removeFood = async (foodId) => {
        const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
        await fetchList();
        if (response.data.success) {
            toast.success(response.data.message)
        }
        else {
            toast.error("Error")
        }
    }

    useEffect(() => {
        fetchList();
    }, [])

    const filteredList = list.filter(item => {
        return (category === "All" || item.category === category) &&
               (item.name.toLowerCase().includes(search.toLowerCase()))
    })

    return (
        <div className='list add flex-col'>
            <div className="list-header">
                <p>All Foods List ({filteredList.length} items)</p>
                <div className="list-controls">
                    <input 
                        type="text" 
                        placeholder="Search items..." 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)} 
                        className="search-input"
                    />
                    <select onChange={(e) => setCategory(e.target.value)} name="category" className="category-select">
                        <option value="All">All Categories</option>
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
            </div>
            <div className="list-table">
                <div className="list-table-format title">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {filteredList.map((item, index) => {
                    return (
                        <div key={index} className='list-table-format'>
                            <img src={`${url}/images/` + item.image} alt="" />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>${item.price}</p>
                            <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default List
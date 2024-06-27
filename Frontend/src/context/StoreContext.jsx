import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})
    const url = "http://localhost:5000";
    const [food_list, setfoodList] = useState([]);

    const [token, setToken] = useState("");
    const addtoCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };
    const RemoveFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedItems = { ...prev };
            if (updatedItems[itemId] > 1) {
                updatedItems[itemId] -= 1;
            } else {
                delete updatedItems[itemId];
            }
            return updatedItems;
        });
    };
    
    const CartTotal = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item] * 30;
            }
          
        }
        return totalAmount;
    }
    useEffect(() => {
        
        async function loadData() {
            await fetchfoodlist();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])
    const fetchfoodlist = async () => {
        const response = await axios.get(url + "/api/food/list");
        setfoodList(response.data.data);
    }
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addtoCart,
        RemoveFromCart,
        CartTotal,
        url,
        token,
        setToken
    };
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};
export default StoreContextProvider
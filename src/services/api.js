import axios from "axios"

const getlink = async()=>{
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data
}
export {getlink}
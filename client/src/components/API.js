// Imports
import axios from "axios";
var searchTerm = "how to"
const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

//api call
export default {
    ApiSearch: function () {
        console.log(url)
        return axios.get(url)

    }
}

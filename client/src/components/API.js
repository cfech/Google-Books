// Imports
import axios from "axios";

//api call
export default {
    ApiSearch: function (searchTerm) {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
        return axios.get(url)

    }
}

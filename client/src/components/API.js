// Imports
import axios from "axios";

const url = 'https://www.googleapis.com/books/v1/volumes?q=harrypotter';

//api call
export default {
    ApiSearch: function () {
        console.log(url)
        return axios.get(url)

    }
}

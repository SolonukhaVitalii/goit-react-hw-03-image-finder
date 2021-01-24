import axios from 'axios';

const API_key = '19312613-88e2f4e8eebe9f93070d49b64';
const fetchphotoWithQery = (input, page) => {
    return axios
        .get(
            `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${input}&page=${page}&per_page=12&key=${API_key}`,
        )
        .then(response => response.data.hits);
};

export default fetchphotoWithQery;


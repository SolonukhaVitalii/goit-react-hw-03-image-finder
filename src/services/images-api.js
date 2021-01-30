import axios from 'axios';

const key = '19312613-88e2f4e8eebe9f93070d49b64';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = ({ searchQuery = '', currentPage = 1, perPage = 12 }) => {
  return axios
    .get(
      `?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${currentPage}&per_page=${perPage}&key=${key}`,
    )
    .then(response => response.data.hits);
};

export default { fetchImages };
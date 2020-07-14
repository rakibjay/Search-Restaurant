import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer nTzYOuC48F5z6-jK7OoyxXtTSXCTXVbpzwtqxFp4nwbt9l2ggSXX460pV4zgCAOaiHm6LX2oUVWec-tolU73n6jhz9FCl-Crj5pyh8Jt0ULz5R-ZkSD4LfY5KqH5XnYx'
    }
});
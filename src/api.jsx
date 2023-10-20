import axios from 'axios';

const SearchImages = async (term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{Authorization:'Client-ID hEhaXY-Ms9wi9QSDe0ZBa6Iht7RJbqTZ-z306l4QtUE'
    },
    params:{
      query:term
    },
  });
  return response.data.results;
    }

    export default SearchImages;
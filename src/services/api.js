import axios from 'axios'

export  const getData = async (url) => {
    const data = await axios.get(url)
    //  .then(response => response.data)
    //  .then( data=> {
    //    setUserString(JSON.stringify(data.results))
    //    setUsers(data.results)
    //    return data.results
    //  })
     .catch( err => console.log(err));
     return data
}

export const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
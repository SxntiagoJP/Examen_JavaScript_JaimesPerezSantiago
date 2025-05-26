async function FETCH_INFO() {
    const response = await axios.get('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
    ');
    const data = response.data[0];
    return data;
};
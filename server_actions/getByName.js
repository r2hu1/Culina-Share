export const getByName = async (e) => { 
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`);
    const data = await response.json();
    return data;
};
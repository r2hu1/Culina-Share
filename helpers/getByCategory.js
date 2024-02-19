export const getByCategory = async (e) => { 
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e}`);
    const data = await response.json();
    return data;
};
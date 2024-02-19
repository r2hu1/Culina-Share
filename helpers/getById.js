export const getById = async (e) => { 
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e}`);
    const data = await response.json();
    return data;
};
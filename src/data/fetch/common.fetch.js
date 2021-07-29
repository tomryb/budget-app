export const fetchAllCategories = async () => {
  const response = await fetch(
    `http://localhost:5000/categories/?_expand=parentCategory`
    // `${process.env.REACT_APP_API_URL}/categories/?_expand=parentCategory`
  );
  const data = await response.json();

  return data;
};

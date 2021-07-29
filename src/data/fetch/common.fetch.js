export const fetchAllCategories = async () => {
  const port = process.env.PORT || 4000;

  const response = await fetch(
    `${port}/categories/?_expand=parentCategory`
    // `${process.env.REACT_APP_API_URL}/categories/?_expand=parentCategory`
  );
  const data = await response.json();

  return data;
};

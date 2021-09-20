export const fetchAllCategories = async () => {
  const response = await fetch(
    `http://localhost:3001/categories/?_expand=parentCategory`
  );
  const data = await response.json();

  return data;
};

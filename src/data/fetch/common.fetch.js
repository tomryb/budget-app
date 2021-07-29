export const fetchAllCategories = async () => {
  const response = await fetch(
    `https://tr-budget-app.herokuapp.com/api/categories/?_expand=parentCategory`
  );
  const data = await response.json();

  return data;
};

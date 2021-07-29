const PORT = process.env.PORT || 5000;
export const fetchAllCategories = async () => {
  const response = await fetch(
    `${process.env.PORT}/categories/?_expand=parentCategory`
  );
  const data = await response.json();

  return data;
};

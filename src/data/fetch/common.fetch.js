export const fetchAllCategories = async () => {
  const response = await fetch(
    `/categories/?_expand=parentCategory`
  );
  const data = await response.json();

  return data;
};

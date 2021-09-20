export const fetchBudget = async ({ id }) => {
  const response = await fetch(
    `/budgets/${id}/?_embed=transactions`
  );
  const data = await response.json();

  return data;
};

export const fetchBudgetedCategories = async ({ id }) => {
  const response = await fetch(
    `/budgets/${id}/budgetCategories`
  );
  const data = await response.json();

  return data;
};

export const addTransaction = async ({ budgetId, data }) => {
  const response = await fetch(
    `/budgets/${budgetId}/transactions`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return await response.json();
};

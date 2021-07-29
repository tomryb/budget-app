const port = process.env.PORT || 4000;

export const fetchBudget = async ({ id }) => {
  const response = await fetch(
    `${port}/budgets/${id}/?_embed=transactions`
    // `${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`
  );
  const data = await response.json();

  return data;
};

export const fetchBudgetedCategories = async ({ id }) => {
  const response = await fetch(
    `${port}/budgets/${id}/budgetCategories`
    // `${process.env.REACT_APP_API_URL}/budgets/${id}/budgetCategories`
  );
  const data = await response.json();

  return data;
};

export const addTransaction = async ({ budgetId, data }) => {
  const response = await fetch(
    `${port}/budgets/${budgetId}/transactions`,
    // `${process.env.REACT_APP_API_URL}/budgets/${budgetId}/transactions`,
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

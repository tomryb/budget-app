const PORT = process.env.PORT || 5000;


export const fetchBudget = async ({ id }) => {
  const response = await fetch(
    `${process.env.PORT}/budgets/${id}/?_embed=transactions`
  );
  const data = await response.json();

  return data;
};

export const fetchBudgetedCategories = async ({ id }) => {
  const response = await fetch(
    `${process.env.PORT}/budgets/${id}/budgetCategories`
  );
  const data = await response.json();

  return data;
};

export const addTransaction = async ({ budgetId, data }) => {
  const response = await fetch(
    `${process.env.PORT}/budgets/${budgetId}/transactions`,
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

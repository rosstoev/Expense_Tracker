import Expense from "../models/expense";

const DATABASE_URL =
  "https://expenses-4420e-default-rtdb.europe-west1.firebasedatabase.app/expenses";

export async function saveData(expense) {
  const response = await fetch(`${DATABASE_URL}.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });

  const result = await response.json();

  return result.name;
}

export async function fetchData() {
  const response = await fetch(`${DATABASE_URL}.json`);
  const result = await response.json();

  const data = [];

  for (const key in result) {
    const expense = new Expense(
      key,
      result[key].title,
      result[key].price,
      new Date(result[key].date)
    );
    data.push(expense);
  }

  return data;
}

export async function updateData(id, data) {

  const response = await fetch(`${DATABASE_URL}/${id}.json`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
}

export async function deleteData(id) {
    const response = await fetch(`${DATABASE_URL}/${id}.json`, {
        method: "DELETE"
    })

    const result = await response.json();

    return result;
}

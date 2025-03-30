// src/api.ts

const BASE_URL = "http://localhost:3000";

// Define the type for name object
export interface Name {
  id: number;
  text: string;
}

// Get all names from the server
export const fetchNames = async (): Promise<Name[]> => {
  const response = await fetch(`${BASE_URL}/names`);
  const data = await response.json();
  return data;
};

// Add a new name to the server
export const addName = async (text: string) => {
  let newItem = {
    text: text,
  };

  const response = await fetch(`${BASE_URL}/names`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });

  const data = await response.json();
  return data;
};

// Delete a name from the server
export const deleteName = async (id: number) => {
  await fetch(`${BASE_URL}/names/${id}`, {
    method: "DELETE",
  });
};

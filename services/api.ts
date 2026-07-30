const API_URL =
  "https://script.google.com/macros/s/AKfycbxpNjgy4EMAS7_1F3nAqedee7NKdKzTY9oOJ_CKUwyKVaIAIy1DX_x5vGXUoDsTfamR/exec";

export async function getCompte(id: string) {
  const response = await fetch(`${API_URL}?id=${id}`);
  return await response.json();
}
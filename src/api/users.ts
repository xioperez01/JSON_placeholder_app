export async function fetchUsersList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Error al obtener los usuarios");
  return res.json();
}

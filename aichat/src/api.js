// Calls the Go backend
export async function searchQuery(query) {
  const resp = await fetch("http://localhost:8080/search-query", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  if (!resp.ok) {
    throw new Error(await resp.text());
  }
  return resp.json();
}

// Simulated article fetch
export async function fetchArticle(id) {
  return {
    id,
    title: "Simulated Article " + id,
    content: "This is the full content for article " + id,
  };
}

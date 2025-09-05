import React, { useState } from "react";

function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    try {
      await onSearch(query);
    } catch (err) {
      setError(err.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-6 flex gap-2">
      <input
        type="text"
        placeholder="Ask your IT question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-2xl shadow-sm focus:ring focus:ring-blue-400"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "..." : "Search"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

export default SearchBox;

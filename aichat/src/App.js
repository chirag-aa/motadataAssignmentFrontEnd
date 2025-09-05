import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import Results from "./components/Results";
import ArticleModal from "./components/ArticleModal";
import { searchQuery, fetchArticle } from "./api";

function App() {
  const [result, setResult] = useState(null);
  const [article, setArticle] = useState(null);

  const handleSearch = async (query) => {
    const data = await searchQuery(query);
    setResult(data);
    setArticle(null);
  };

  const handleSelectArticle = async (id) => {
    const art = await fetchArticle(id);
    setArticle(art);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 shadow">
        <h1 className="text-center text-2xl font-bold">Event-to-Insight</h1>
      </header>

      <main className="p-6">
        <SearchBox onSearch={handleSearch} />
        <Results result={result} onSelectArticle={handleSelectArticle} />
      </main>

      <ArticleModal article={article} onClose={() => setArticle(null)} />
    </div>
  );
}

export default App;

import React from "react";

function Results({ result, onSelectArticle }) {
  if (!result) return null;

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-3">AI Answer</h2>
      <p className="text-gray-700 mb-4 whitespace-pre-line">
        {result.ai_summary_answer}
      </p>

      <h3 className="text-lg font-semibold">Relevant Articles</h3>
      <ul className="list-disc list-inside text-blue-600">
        {result.ai_relevant_articles.map((id) => (
          <li key={id}>
            <button
              onClick={() => onSelectArticle(id)}
              className="hover:underline"
            >
              {id}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;

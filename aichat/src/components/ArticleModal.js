import React from "react";

function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 max-w-lg w-full shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{article.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            ✖
          </button>
        </div>
        <p className="text-gray-700 whitespace-pre-line">{article.content}</p>
      </div>
    </div>
  );
}

export default ArticleModal;

"use client";

import { useState } from "react";


export default function Home() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [cuisineType, setCuisineType] = useState("");

  const handleAddIngredient = () => {
    if (newIngredient.trim()) {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient("");
    }
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add API call to AI service
    console.log("Submitted:", { ingredients, cuisineType });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <main className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          What's Cooking Tonight?
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Ingredients Input */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Add Your Ingredients
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter an ingredient"
                />
                <button
                  type="button"
                  onClick={handleAddIngredient}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Ingredients List */}
            {ingredients.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {ingredient}
                    <button
                      type="button"
                      onClick={() => handleRemoveIngredient(index)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Cuisine Type Selection */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Cuisine Type
              </label>
              <select
                value={cuisineType}
                onChange={(e) => setCuisineType(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a cuisine type</option>
                <option value="italian">Italian</option>
                <option value="mexican">Mexican</option>
                <option value="chinese">Chinese</option>
                <option value="indian">Indian</option>
                <option value="japanese">Japanese</option>
                <option value="american">American</option>
                <option value="mediterranean">Mediterranean</option>
                <option value="thai">Thai</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
            >
              Find Recipes
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
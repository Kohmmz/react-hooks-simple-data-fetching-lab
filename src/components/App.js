import { useState, useEffect } from "react";

export default function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the dog image:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {loading ? (
        <p className="text-lg text-gray-700">Loading...</p>
      ) : (
        <img
          src={dogImage}
          alt="A Random Dog"
          className="rounded-xl shadow-md w-96 h-auto mt-4"
        />
      )}
    </div>
  );
}

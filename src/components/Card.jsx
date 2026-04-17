function Card({ title, children }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 text-center">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {title}
      </h2>

      <div className="text-gray-600 text-sm">{children}</div>
    </div>
  );
}

export default Card;
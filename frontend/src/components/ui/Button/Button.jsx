const Button = ({ children }) => {
  return (
    <div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

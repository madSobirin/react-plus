const Input = (p) => {
  const { type, placeholder } = p;
  return (
    <div>
      <input
        type={type}
        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;

const Label = ({ children }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {children}
      </label>
    </div>
  );
};

export default Label;

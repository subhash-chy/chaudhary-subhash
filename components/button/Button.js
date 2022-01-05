function Button({ accent, title, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${
        accent && "bg-primary shadow-2xl shadow-primary/50 text-gray-50"
      } z-10 px-3 py-2 rounded-sm hover:opacity-90`}
    >
      {/* "bg-primary text-gray-100 px-3 rounded-sm hover:opacity-90" */}
      {title}
    </button>
  );
}

export default Button;

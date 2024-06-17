function Button({ text, action }) {
  return (
    <div className="flex flex-col items-center mt-6">
      <button
        className="bg-black text-white w-full max-w-xs md:w-[200px] h-9 text-base md:text-lg font-semibold border-none rounded-md drop-shadow-md hover:drop-shadow-none"
        onClick={action}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;

function Button({ text, action }) {
  return (
    <div className="flex flex-col items-center mt-6">
      <button
        className="bg-black text-white w-[200px] h-9 text-lg font-semibold border-none rounded-md drop-shadow-[0px_4px_#ddd] hover:drop-shadow-none"
        onClick={action}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;

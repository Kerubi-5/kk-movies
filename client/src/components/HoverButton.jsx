const HoverButton = ({ click, children, icon }) => {
  return (
    <button
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 border border-gray-400 rounded  h-10 self-center w-2/4 flex items-center justify-between"
      onClick={click}
    >
      {children}
      {icon()}
    </button>
  );
};

export default HoverButton;

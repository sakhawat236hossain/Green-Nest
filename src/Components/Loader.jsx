const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-50 via-white to-green-100 
                    flex flex-col items-center justify-center z-[9999]">

      {/* Spinner */}
      <div className="relative">
        <div className="w-20 h-20 border-[5px] border-green-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-20 h-20 border-[5px] border-green-500 
                        border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* Text */}
      <p className="mt-5 text-green-700 font-bold text-lg tracking-wide animate-pulse">
        Loading Data...
      </p>

      {/* Sub Text */}
      <span className="text-sm text-green-500 mt-1">
        Preparing your green space 🌿
      </span>

    </div>
  );
};

export default Loader;

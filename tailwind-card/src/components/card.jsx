const Card = () => {
  return (
    <div className="bg-gray-100  rounded-lg shadow-md text-center">
      {/* Hero Section */}
      <div className="flex items-center justify-center h-20 bg-gradient-to-r from-indigo-800">
        <h1 className="text-2xl font-bold text-white">News you can Trust.</h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center p-4">
        <h3 className="text-lg font-bold text-gray-700">Stay up to date with the Latest!</h3>
        <p className="mt-2 text-gray-600 ">
          Subscribe to our newsletter for the latest news straight into your inbox.
        </p>
        <form className="mt-4 flex flex-col items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="min-w-64 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="min-w-64 bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-800 rounded-full font-bold"
          >
            Subscribe Now
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500">We value your privacy</p>
      </div>
    </div>
  );
};

export default Card;
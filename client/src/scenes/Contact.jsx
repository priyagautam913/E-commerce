const Contact = () => {
  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-4xl w-full max-w-3xl px-10">
        <h1 className="text-5xl font-serif text-center text-gray-800 pt-10">
          Contact
        </h1>
        <p className="text-center text-gray-600 mt-4">
          Whether you have a question about your order, need skincare advice, or
          just want to say hello.
        </p>

        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder=""
                className="w-full px-4 py-3 border rounded-lg bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder=""
                className="w-full px-4 py-3 border rounded-lg bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              placeholder="How can we help?"
              rows="5"
              className="w-full px-4 py-3 border rounded-lg bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto bg-rose-400 text-white px-8 py-3 rounded-full shadow-md hover:bg-gray-900 transition"
            >
              Submit Message
            </button>
          </div>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Have Questions? See the{" "}
          <a href="#" className="text-pink-600 underline">
            FAQ
          </a>
        </p>
      </div>
    </div>
  );
};
export default Contact;

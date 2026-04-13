import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900">

  
      <section className="relative px-6 pt-28 pb-20 text-center overflow-hidden">

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_60%)]" />

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
          Study smarter with your documents
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Upload PDFs, ask questions, and get instant insights. 
          A clean, focused workspace built for serious learning.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/register")}
            className="px-7 py-3 bg-blue-600 text-white rounded-full text-sm font-medium 
            hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            Get Started
          </button>

          <button className="px-7 py-3 text-sm font-medium text-gray-700 hover:text-black transition">
            See how it works →
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          
          <div className="group">
            <h3 className="text-lg font-semibold mb-3">
              Upload documents
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Drag and drop PDFs into your workspace and let the system process
              everything instantly.
            </p>
            <div className="mt-4 h-[2px] w-0 bg-blue-600 transition-all group-hover:w-12" />
          </div>

          <div className="group">
            <h3 className="text-lg font-semibold mb-3">
              Ask anything
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Query your documents naturally and get precise answers in seconds.
            </p>
            <div className="mt-4 h-[2px] w-0 bg-blue-600 transition-all group-hover:w-12" />
          </div>

          <div className="group">
            <h3 className="text-lg font-semibold mb-3">
              Private & secure
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Your data stays isolated and protected with authentication.
            </p>
            <div className="mt-4 h-[2px] w-0 bg-blue-600 transition-all group-hover:w-12" />
          </div>

        </div>
      </section>

      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-semibold text-center mb-16">
            How it works
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">
            {[
              "Upload your PDF",
              "We process content",
              "Search relevant parts",
              "Get instant answers"
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-sm text-gray-400 mb-2">
                  0{i + 1}
                </div>
                <p className="text-gray-700 font-medium">{step}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-24 text-center px-6">
        <div className="max-w-xl mx-auto">

          <h2 className="text-3xl font-semibold mb-6">
            Start learning faster
          </h2>

          <p className="text-gray-500 mb-10">
            No setup. No complexity. Just upload and ask.
          </p>

          <button
            onClick={() => navigate("/register")}
            className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium
            hover:bg-gray-900 transition-all shadow-md hover:shadow-lg"
          >
            Create your account
          </button>

        </div>
      </section>

  
      <footer className="text-center py-10 text-gray-400 text-sm border-t border-gray-100">
  <div className="mb-2">
    © 2026 Smart Study Assistant
  </div>

  <div className="flex justify-center gap-6 mb-3">
    <a href="https://github.com/Rahuls2642" target="_blank" className="hover:text-black">
      GitHub
    </a>
    <a href="mailto:rahuls6408@gmail.com" className="hover:text-black">
      Email
    </a>
  </div>

  <div className="flex justify-center gap-6 text-xs">
    <span className="hover:text-black cursor-pointer">Privacy</span>
    <span className="hover:text-black cursor-pointer">Terms</span>
  </div>
</footer>
    </div>
  );
};

export default Home;
import { useState } from "react";
import API from "../utils/api";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file || loading) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      await API.post("/upload", formData);
      setFile(null);
      console.log("Uploaded successfully");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 py-3 flex items-center justify-between bg-white border-b border-gray-100">


      <div className="flex items-center gap-4">


        <input
          type="file"
          id="fileUpload"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <label
          htmlFor="fileUpload"
          className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium 
          text-gray-700 cursor-pointer hover:bg-gray-50 transition"
        >
          Upload PDF
        </label>

        {file ? (
          <div className="flex items-center gap-2 text-sm text-gray-600">

            <span className="=truncate">
              {file.name}
            </span>

            <button
              onClick={() => setFile(null)}
              className="text-gray-400 hover:text-gray-700"
            >
              ✕
            </button>

          </div>
        ) : (
          <span className="text-sm text-gray-400">
            No file selected
          </span>
        )}
      </div>


      <button
        onClick={handleUpload}
        disabled={loading || !file}
        className={`px-5 py-2 rounded-full text-sm font-medium transition
          ${
            loading || !file
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default Upload;
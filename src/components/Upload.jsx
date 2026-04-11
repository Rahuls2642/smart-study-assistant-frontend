import axios from "axios";
import API from "../utils/api"
import { useState } from "react";
import "../index.css";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    await API.post("/upload", formData);
    alert("Uploaded!");
  };

  return (
    <div className="p-4 border-b">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Upload
      </button>
    </div>
  );
};

export default Upload;
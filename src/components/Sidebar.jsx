import { FaMagic, FaCommentAlt, FaImage, FaEdit, FaHistory, FaFileAlt, FaShoppingBag } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md flex flex-col px-4 py-6 space-y-4">
      <h1 className="text-2xl font-bold text-purple-600 mb-6">Gamma</h1>

      <button className="flex items-center gap-2 p-2 rounded bg-purple-100 text-purple-700">
        <FaMagic /> Ai Presentation
      </button>

      <button className="flex items-center gap-2 p-2 hover:bg-gray-100">
        <FaCommentAlt /> AI Chat
      </button>
      <button className="flex items-center gap-2 p-2 hover:bg-gray-100">
        <FaImage /> AI Image
      </button>
      <button className="flex items-center gap-2 p-2 hover:bg-gray-100">
        <FaEdit /> Image Edit
      </button>

      <div className="mt-6 text-sm text-gray-500">other</div>

      <button className="flex items-center gap-2 p-2 hover:bg-gray-100">
        <FaHistory /> History
      </button>
      <button className="flex items-center gap-2 p-2 hover:bg-gray-100">
        <FaFileAlt /> Orders
      </button>
      <button className="flex items-center gap-2 p-2 hover:bg-gray-100">
        <FaShoppingBag /> License
      </button>

      <button className="mt-auto bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded shadow hover:opacity-90">
        ⬆️ Upgrade
      </button>
    </div>
  );
};

export default Sidebar;

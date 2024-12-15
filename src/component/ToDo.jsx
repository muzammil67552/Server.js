import { CiEdit } from "react-icons/ci";
import { ImCross } from "react-icons/im";

const ToDo = ({text}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <span className="text-lg">{text}</span>
      <div className="flex space-x-2">
        <CiEdit className="text-green-500 cursor-pointer hover:text-green-600 transition duration-200" />
        <ImCross className="text-red-500 cursor-pointer hover:text-red-600 transition duration-200" />
      </div>
    </div>
  );
};

export default ToDo;

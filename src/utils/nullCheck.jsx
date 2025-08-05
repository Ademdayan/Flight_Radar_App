import { MdQuestionMark } from "react-icons/md";

const nullCheck = (value, color) => {
  return (
    value || <MdQuestionMark style={{ color: color }} className="question" />
  );
};

export default nullCheck;

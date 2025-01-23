import { NavModalProps } from "@/types/propTypes";
import ReactModal from "react-modal";
import NavMenu from "../atoms/NavMenu";

ReactModal.setAppElement("#__next");

const customStyles = {
  overlay: {
    zIndex: 10,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "white",
    padding: 0,
    borderRadius: "14px",
    maxHeight: "90vh",
    overflowY: "auto",
  },
} as const;

const handleAfterOpen = () => {
  document.body.classList.add("overflow-hidden");
};
const handleAfterClose = () => {
  document.body.classList.remove("overflow-hidden");
};

const NavModal = ({ isOpen, closeModal }: NavModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Login Modal"
      style={customStyles}
      onAfterOpen={handleAfterOpen}
      onAfterClose={handleAfterClose}
    >
      <div className="flex h-[500px] w-[300px] flex-col items-center justify-center rounded-lg bg-white p-5">
        <div className="flex flex-col items-center justify-center gap-[10px] text-[17px] h-full w-full">
          <NavMenu className="flex h-full w-full cursor-pointer items-center justify-center active:bg-[#379ee2] rounded-md bg-[#3DB2FF] px-[15px] py-[2px] text-[17px] font-semibold text-white" />
        </div>
        <button
          onClick={closeModal}
          className="mt-5 rounded-lg bg-[#3DB2FF] px-4 py-2 text-white text-lg active:bg-[#379ee2]"
        >
          Close
        </button>
      </div>
    </ReactModal>
  );
};

export default NavModal;

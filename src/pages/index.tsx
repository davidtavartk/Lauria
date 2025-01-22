import MainPage from "./MainPage";
import { ToastContainer } from "react-toastify"

export default function Home() {
  return <div className="h-full w-full">
    <MainPage />

    <ToastContainer
          position="top-right"
          autoClose={5000}
          pauseOnHover={false}
          theme="dark"
        />
  </div>;
}

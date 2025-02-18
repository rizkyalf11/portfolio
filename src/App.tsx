import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/ui/Navbar";
import { useMyStore } from "./store/mystore";
import WorkDetail from "./pages/WorkDetail";

function App() {
  const { page, setPage } = useMyStore((state) => state);

  return (
    <div className="relative h-screen w-full overflow-y-auto bg-bg transition-colors duration-150 dark:bg-darkBg">
      <div className="fixed bottom-1/2 right-1/2 z-0 translate-x-1/2 translate-y-1/2">
        <img src="/chips.gif" alt="CHIPS" width={150} />
      </div>

      {/* buat awan pixel biar ga flat bg nya */}

      <AnimatePresence mode="wait">
        {page === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="relative h-full w-full"
          >
            <Home />
          </motion.div>
        )}
        {page === "about" && (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="relative h-full w-full"
          >
            <About />
          </motion.div>
        )}
        {page === "work" && (
          <motion.div
            key="work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="relative h-full w-full"
          >
            <Work />
          </motion.div>
        )}
        {page === "work-detail" && (
          <motion.div
            key="work-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="relative h-full w-full"
          >
            <WorkDetail />
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar handleClick={(e) => setPage(e)} page={page} />
    </div>
  );
}

export default App;

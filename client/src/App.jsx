import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};
export default App;

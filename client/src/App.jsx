import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
    </div>
  );
};
export default App;

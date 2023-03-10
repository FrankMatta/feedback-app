import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import { FeedbackProvider } from "./context/FeedbackProvider";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text={"hi brotha"} />
        <div className="App">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

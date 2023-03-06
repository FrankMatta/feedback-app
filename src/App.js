import { useState } from "react";
import "./App.css";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/feedbackData";
import FeedbackForm from "./components/FeedbackForm";
function App() {
  const [feedbacks, setFeedback] = useState(FeedbackData)

  function deleteFeedback(id) {
    setFeedback(feedbacks.filter((feedback)=> feedback.id !== id))
  }

  function addFeedback(newFeedback) {
    setFeedback([newFeedback, ...feedbacks])
  }

  return (
    <>
      <Header text={"hi brotha"}/>
      <div className="App">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedbacks={feedbacks}/>
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;

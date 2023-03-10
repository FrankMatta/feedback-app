import { useContext } from "react";
import FeedbackContext from "../context/FeedbackProvider";

function FeedbackStats() {
  const { feedbacks } = useContext(FeedbackContext);

  let average =
    feedbacks.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedbacks.length;

    average = average.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
      <h4>Feedbacks: {feedbacks.length}</h4>
      <h4>Average: {isNaN(average) ?  0: average}</h4>
    </div>
  );
}

export default FeedbackStats;

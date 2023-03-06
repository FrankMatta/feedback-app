import PropTypes from "prop-types";

function FeedbackStats({ feedbacks }) {
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

FeedbackStats.propTypes = {
    feedbacks: PropTypes.array.isRequired
};

export default FeedbackStats;

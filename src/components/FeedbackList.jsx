import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList({ feedbacks, handleDelete }) {
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No feedbacks yet</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbacks.map((feedback) => {
          return <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedbackItem
              key={feedback.id}
              feedback={feedback}
              handleDelete={handleDelete}
            />
          </motion.div>;
        })}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;

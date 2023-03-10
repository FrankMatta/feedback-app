import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackProvider";

function FeedbackList() {
  const { feedbacks } = useContext(FeedbackContext);

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
            />
          </motion.div>;
        })}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;

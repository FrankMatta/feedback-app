import { createContext, useState } from "react";
import FeedbackData from '../data/feedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedbacks, setFeedback] = useState(FeedbackData);

    function deleteFeedback(id) {
        setFeedback(feedbacks.filter((feedback) => feedback.id !== id));
    }

    function addFeedback(newFeedback) {
        setFeedback([newFeedback, ...feedbacks]);
      }
    
    return <FeedbackContext.Provider value={{feedbacks, deleteFeedback, addFeedback}} >{children}</FeedbackContext.Provider>
}

export default FeedbackContext;
import { createContext, useState } from "react";
import FeedbackData from '../data/feedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedbacks, setFeedback] = useState(FeedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState({ feedback: {}, edit: false })
    function deleteFeedback(id) {
        setFeedback(feedbacks.filter((feedback) => feedback.id !== id));
    }

    function addFeedback(newFeedback) {
        setFeedback([newFeedback, ...feedbacks]);
    }

    function updateFeedback(id, updatedFeedback) {
        setFeedback(feedbacks.map((f) => {
            return f.id === id ? {...feedbacks, ...updatedFeedback} : f
        }))
    }

    function editFeedback(feedback) {
        setFeedbackEdit({feedback, edit: true})
    }
    
    return <FeedbackContext.Provider value={{feedbacks, feedbackEdit, deleteFeedback, addFeedback, editFeedback, updateFeedback}} >{children}</FeedbackContext.Provider>
}

export default FeedbackContext;
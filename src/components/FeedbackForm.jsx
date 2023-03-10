import Card from "../shared/Card";
import { useState } from "react";
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackProvider";
function FeedbackForm() {
  const { addFeedback } = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  function handleTextChange(event) {
    const userFeedback = event.target.value.trim();
    if (!userFeedback || userFeedback.length <= 10) {
      setButtonDisabled(true);
      setMessage("Feedback must be at least 10 characters");
    } else {
      setButtonDisabled(false);
      setMessage(null);
    }
    setText(userFeedback);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        id: new Date().getTime(),
        text,
        rating
      }

      addFeedback(newFeedback)
      setText('');
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Give us a rating!</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
          selected={rating}
        />
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Write feedback"
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={buttonDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

FeedbackForm.propTypes = {};

export default FeedbackForm;

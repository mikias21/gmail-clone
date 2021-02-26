import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

// css
import "../styles/SendMail.css";

// material UI
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

// redux
import { closeSendMessage } from "../features/mailSlice";

// firebase
import { db } from "../firebase";
import firebase from "firebase";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    db.collection("gmail_emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          name="to"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail_error">To is required </p>}
        <input
          placeholder="Subject"
          name="subject"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className="sendMail_error">Subject is required </p>
        )}
        <input
          placeholder="Message..."
          className="sendMail__message"
          name="message"
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className="sendMail_error">Message is required </p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__button"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;

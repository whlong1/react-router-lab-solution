import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  mailboxId: 0,
  recipient: "",
  message: "",
};

const LetterForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === formData.mailboxId);

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addLetter(formData)
    navigate(`/mailboxes/${formData.mailboxId}`)
  };

  const handleChange = ({ target }) => {
    if (target.name === "mailboxId") {
      setFormData({
        ...initialState, // Reset form when a new box is selected
        [target.name]: Number(target.value)
      })
    } else {
      setFormData({
        ...formData,
        [target.name]: target.value
      })
    }
  };

  return (
    <main>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Select a PO Box</label>
        <select name="mailboxId" id="mailboxId" value={formData.mailboxId} onChange={handleChange}>
          {props.mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              PO Box {mailbox._id}
            </option>
          ))}
        </select>

        <label htmlFor="recipient">
          Select a recipient
        </label>
        <select required name="recipient" id="recipient" value={formData.recipient} onChange={handleChange}>
          <option value="">Please select a recipient</option>
          {selectedBox.boxholders.map((boxholder, idx) => (
            <option key={idx} value={boxholder}>
              {boxholder}
            </option>
          ))}
        </select>

        <label htmlFor="message">
          Enter your message:
        </label>
        <textarea
          required
          type="text"
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submi">Submit</button>
      </form>
    </main>
  )
}

export default LetterForm;
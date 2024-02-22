import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = { boxholders: [], boxSize: "Small" };

const MailboxForm = (props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [boxholder, setBoxholder] = useState("");

  const handleAddBoxholder = () => {
    if (!boxholder.trim()) return;
    setFormData({ ...formData, boxholders: [...formData.boxholders, boxholder.trim()] });
    setBoxholder("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  // Will probably need to include some of this code in the writeup:
  const handleChange = (e) => {
    if (e.target.name === "boxholder") {
      setBoxholder(e.target.value);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  return (
    <main>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="boxholder">
          Enter a Box Holder Name:
        </label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          placeholder="Boxholder name"
          value={boxholder}
          onChange={handleChange}
        />
        <button type="button" onClick={handleAddBoxholder}>Add Boxholder</button>

        <label htmlFor="current-box-holders">
          Current Box Holders:
        </label>
        <ul id="current-box-holders">
          {formData.boxholders.map((boxholder, idx) => (
            <li key={idx}>{boxholder}</li>
          ))}
        </ul>

        <label htmlFor="boxSize">
          Select a Box Size:
        </label>
        <select
          required
          id="boxSize"
          name="boxSize"
          onChange={handleChange}
          value={formData.boxSize}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
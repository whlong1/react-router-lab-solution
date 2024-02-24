import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = { boxholder: '', boxSize: 'Small' };

const MailboxForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate('/mailboxes');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='boxholder'>
          Enter a Boxholder:
        </label>
        <input
          required
          type='text'
          id='boxholder'
          name='boxholder'
          placeholder='Boxholder name'
          onChange={handleChange}
        />
        <label htmlFor='boxSize'>
          Select a Box Size:
        </label>
        <select
          required
          id='boxSize'
          name='boxSize'
          onChange={handleChange}
          value={formData.boxSize}
        >
          <option value='Small'>Small</option>
          <option value='Medium'>Medium</option>
          <option value='Large'>Large</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
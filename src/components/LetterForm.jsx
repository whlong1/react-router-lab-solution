import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
  mailboxId: 0, recipient: '', message: ''
}

const LetterForm = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addLetter(formData)
    navigate(`/mailboxes/${formData.mailboxId}`)
  }

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.name === 'mailboxId'
        ? Number(target.value)
        : target.value
    })
  }

  return (
    <main>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor='mailboxId'>Select a Mailbox</label>
        <select name='mailboxId' id='mailboxId' value={formData.mailboxId} onChange={handleChange}>
          {props.mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Mailbox {mailbox._id}
            </option>
          ))}
        </select>

        <label htmlFor='recipient'>
          Recipient
        </label>
        <input
          required
          type='text'
          id='recipient'
          name='recipient'
          placeholder='Recipient name'
          onChange={handleChange}
        />
        <label htmlFor='message'>
          Message
        </label>
        <textarea
          required
          id='message'
          name='message'
          placeholder='Message'
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default LetterForm
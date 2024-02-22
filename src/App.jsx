import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// components
import Nav from "./components/Nav";

// Level up:
import LetterForm from "./components/LetterForm";

// Core content:
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";

const mailboxObjectExample = {
  _id: 0, boxSize: "Small", boxholder: "Alex",
}

const App = () => {
  const [mailboxes, setMailboxes] = useState([
    mailboxObjectExample
  ])
  const [letters, setLetters] = useState([])

  const addBox = (boxData) => {
    boxData._id = mailboxes.length
    setMailboxes([...mailboxes, boxData])
  }

  const addLetter = (letterData) => {
    letterData._id = letterData.length
    setLetters([...letters, letterData])
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />

        <Route path="/mailboxes/:mailboxId" element={
          <MailboxDetails mailboxes={mailboxes} letters={letters} />
        } />

        <Route path="/new-letter" element={
          <LetterForm addLetter={addLetter} mailboxes={mailboxes} />
        } />
      </Routes>
    </>
  )
}

export default App


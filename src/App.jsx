import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// components
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';
import LetterForm from './components/LetterForm';

const mailboxObjectExample = {
  _id: 0, boxSize: 'Small', boxholder: 'Alex',
};

const App = () => {

  const [mailboxes, setMailboxes] = useState([
    mailboxObjectExample
  ]);

  const [letters, setLetters] = useState([]);

  const addBox = (mailboxData) => {
    mailboxData._id = mailboxes.length;
    setMailboxes([...mailboxes, mailboxData]);
  };

  const addLetter = (letterData) => {
    letterData._id = letters.length;;
    setLetters([...letters, letterData]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />} />
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />

        <Route path='/mailboxes/:mailboxId' element={
          <MailboxDetails mailboxes={mailboxes} letters={letters} />
        } />

        <Route path='/new-letter' element={
          <LetterForm addLetter={addLetter} mailboxes={mailboxes} />
        } />
      </Routes>
    </>
  );
};

export default App;
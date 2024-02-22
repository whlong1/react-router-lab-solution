import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// components
import Nav from "./components/Nav";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (boxData) => {
    boxData._id = mailboxes.length;
    setMailboxes([...mailboxes, boxData]);
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </>
  );
};

export default App;

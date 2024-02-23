import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
  const selectedLetters = props.letters.filter((letter) => letter.mailboxId === Number(mailboxId));

  if (!selectedBox) {
    return <main><h1>Mailbox Not Found!</h1></main>;
  }

  return (
    <main>
      <h1>Mailbox {selectedBox._id}</h1>

      <section>
        <h2>Details</h2>
        <p>Boxholder: {selectedBox.boxholder}</p>
        <p>Box Size: {selectedBox.boxSize}</p>
      </section>

      <section>
        <h2>Letters</h2>
        <ul>
          {selectedLetters.map((letter) => (
            <li key={letter._id}>
              <p>Dear {letter.recipient},</p>
              <p>{letter.message}</p>
            </li>
          ))}
        </ul>
      </section>

    </main>
  );
};

export default MailboxDetails;
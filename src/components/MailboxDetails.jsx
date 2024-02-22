import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

  if (!selectedBox) {
    return <main><h1>Mailbox Not Found</h1></main>;
  }

  return (
    <main>
      <h1>Mailbox {selectedBox._id}</h1>
      <section>
        <h2>Details</h2>
        <p>Boxholder: {selectedBox.boxholder}</p>
        <p>Box Size: {selectedBox.boxSize}</p>
      </section>
    </main>
  );
};

export default MailboxDetails;
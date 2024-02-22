import { useParams } from "react-router-dom"

const MailboxDetails = (props) => {
  const { mailboxId } = useParams()
  const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))

  return (
    <main>
      <h1>Mailbox Details</h1>
      <h2>PO Box {selectedBox._id}</h2>
      <p>
        Boxholder: {selectedBox.boxholder}
      </p>
      <p>
        Box Size: {selectedBox.boxSize}
      </p>
    </main>
  )
}

export default MailboxDetails
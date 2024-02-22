import { useParams } from "react-router-dom"

const MailboxDetails = (props) => {
  const { mailboxId } = useParams()
  const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))
  const selectedLetters = props.letters.filter((letter) => letter.mailboxId === Number(mailboxId))

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

      <h2>Letters</h2>
      <ul>
        {selectedLetters.map((letter) => (
          <li key={letter._id}>
            <p>Dear {letter.recipient},</p>
            <p>{letter.message}</p>
          </li>
        ))}
      </ul>

    </main>
  )
}

export default MailboxDetails
import { Link } from "react-router-dom"

const MailboxList = (props) => {
  return (
    <main>
      <h1>Mailbox List</h1>
      <ul>
        {props.mailboxes.map((mailbox) => (
          <li key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>
              PO BOX {mailbox._id}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default MailboxList
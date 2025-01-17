import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = ({ onDelete }) => {
  const contacts = useSelector(selectContacts);
  return (
    <ul className={css.contactList}>
      {contacts.map((user) => (
        <li className={css.contactItem} key={user.id}>
          <Contact data={user} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

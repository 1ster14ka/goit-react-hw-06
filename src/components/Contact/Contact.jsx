import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "../Contact/Contact.module.css";
import { deleteContacts, selectContacts } from "../../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";

const Contact = ({ data: { name, number, id }, onDelete }) => {
  // console.log(selectContacts);
  // const test = useSelector(selectContacts);
  // console.log(test);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className={css.contactItem}>
          <FaUser />
          <h3>{name}</h3>
        </div>
        <div className={css.contactItem}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => dispatch(deleteContacts(id))}
        className={css.contactItemBtn}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;

import { FC } from "react";
import Contact from "./Contact";

type Contact = {
  id: number;
  src: string;
  name: string;
};

interface Props {
  contacts: Contact[];
}

const Contacts: FC<Props> = ({ contacts }) => {
  return (
    <div className="flex flex-col">
      {contacts.map(contact => (
        <Contact key={contact.id} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
};

export default Contacts;

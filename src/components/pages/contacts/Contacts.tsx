import "./contacts.scss";
import { Cards } from "../../ui/cards/Cards";
import { Contacts as UIContacts } from "../../ui/contacts/Contacts";
import { useBreadcrumbs } from "../../../hooks/useBreadcrumbs";

const CardProps = {
  heading: 'contacts.heading',
  items: [
    {
      name: 'contacts.items.0.name',
      description: <UIContacts email phoneNumbers={['(044) 426-64-44', '(067) 570-34-89']} geopoint={{name: 'contacts.items.0.geopointName', link: 'https://goo.gl/maps/xHMPW2855d7WGKv46'}} />,
      id: '0'
    },
    {
      name: 'contacts.items.1.name',
      description: <UIContacts phoneNumbers={['(067) 540-40-90']} geopoint={{name: 'contacts.items.1.geopointName', link: 'https://goo.gl/maps/zTXLDNa64mcGJ5cVA'}} />,
      id: '1'
    },
    {
      name: 'contacts.items.2.name',
      description: <UIContacts phoneNumbers={['(067) 692-15-75']} geopoint={{name: 'contacts.items.2.geopointName', link: 'https://goo.gl/maps/zLFw5DZejXd59Ly38'}} />,
      id: '2'
    },
    {
      name: 'contacts.items.3.name',
      description: <UIContacts phoneNumbers={['(+32) 233-10-20', '(067) 313-64-07']} geopoint={{name: 'contacts.items.3.geopointName', link: 'https://goo.gl/maps/MXASknRsYFNFy5WT7'}} />,
      id: '3'
    },
  ]
}

export const Contacts: React.FC = () => {
  useBreadcrumbs({name: 'pageLinks.contacts', link: 'contacts'});

  return <section className="contactsPage">
    <Cards headingColor="white" headingNumber={2} className="contactsPage__cards" button={false} {...CardProps} />
  </section>
};
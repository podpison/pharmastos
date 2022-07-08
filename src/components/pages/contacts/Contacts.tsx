import "./contacts.scss";
import { Cards } from "../../ui/cards/Cards";
import { Contacts as UIContacts } from "../../ui/contacts/Contacts";

const CardProps = {
  heading: 'Контакты',
  items: [
    {
      name: 'Киев',
      description: <UIContacts email phoneNumbers={['(044) 426-64-44', '(067) 570-34-89']} geopoint={{name: 'пр. Степана Бандеры, 21 оф. 422, 04655', link: 'https://goo.gl/maps/xHMPW2855d7WGKv46'}} />
    },
    {
      name: 'Харьков',
      description: <UIContacts phoneNumbers={['(067) 540-40-90']} geopoint={{name: 'ул. Малопаносовкая 4/7, офис 310', link: 'https://goo.gl/maps/zTXLDNa64mcGJ5cVA'}} />
    },
    {
      name: 'Днепр',
      description: <UIContacts phoneNumbers={['(067) 692-15-75']} geopoint={{name: 'Пр. Кирова 78 (ТЦ Юность)', link: 'https://goo.gl/maps/zLFw5DZejXd59Ly38'}} />
    },
    {
      name: 'Львов',
      description: <UIContacts phoneNumbers={['(+32) 233-10-20', '(067) 313-64-07']} geopoint={{name: 'ул. Шевченко 31, офис 211', link: 'https://goo.gl/maps/MXASknRsYFNFy5WT7'}} />
    },
  ]
}

export const Contacts: React.FC = () => {
  return <section>
    <Cards className="contactsPage__cards" button={false} {...CardProps} />
  </section>
};
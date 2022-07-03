import { Link } from "react-router-dom";
import { Cards } from "../cards/Cards";
// import { Card } from "../cards/Cards";
import "./news.scss";

const news = [
  {
    name: 'Осообенности перчаток радиационной защиты',
    img: 'https://i.postimg.cc/D02vNcKH/Rectangle-290.png',
    description: 'Защита от вредного воздейстия рентгеновского излучения - ключевой момент, которым нельзя пренебрегать. От этого зависит здоровье людей',
    to: 'somewhere'
  },
  {
    name: 'Осообенности перчаток радиационной защиты',
    img: 'https://i.postimg.cc/D02vNcKH/Rectangle-290.png',
    description: 'Защита от вредного воздейстия рентгеновского излучения - ключевой момент, которым нельзя пренебрегать. От этого зависит здоровье людей',
    to: 'somewhere'
  },
  {
    name: 'Осообенности перчаток радиационной защиты',
    img: 'https://i.postimg.cc/D02vNcKH/Rectangle-290.png',
    description: 'Защита от вредного воздейстия рентгеновского излучения - ключевой момент, которым нельзя пренебрегать. От этого зависит здоровье людей',
    to: 'somewhere'
  },
  {
    name: 'Осообенности перчаток радиационной защиты',
    img: 'https://i.postimg.cc/D02vNcKH/Rectangle-290.png',
    description: 'Защита от вредного воздейстия рентгеновского излучения - ключевой момент, которым нельзя пренебрегать. От этого зависит здоровье людей',
    to: 'somewhere'
  },
  {
    name: 'Осообенности перчаток радиационной защиты',
    img: 'https://i.postimg.cc/D02vNcKH/Rectangle-290.png',
    description: 'Защита от вредного воздейстия рентгеновского излучения - ключевой момент, которым нельзя пренебрегать. От этого зависит здоровье людей',
    to: 'somewhere'
  },
]

export const News: React.FC = () => {
  return <Cards disabledImgPaddings heading="Новости" items={news} link={{link: 'Все новости', path: '/news'}} />
};
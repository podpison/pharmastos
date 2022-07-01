import { Link } from "react-router-dom";
// import { Card } from "../cards/Cards";
import "./news.scss";

const news = [
  {
    name: 'Осообенности перчаток радиационной защиты',
    img: 'https://i.postimg.cc/D02vNcKH/Rectangle-290.png',
    description: 'Защита от вредного воздейстия рентгеновского излучения - ключевой момент, которым нельзя пренебрегать. От этого зависит здоровье людей'
  },
  {
    name: 'Осообенности перчаток радиационной защиты',
    img: 'https://i.postimg.cc/D02vNcKH/Rectangle-290.png',
    description: 'Защита от вредного воздейстия рентгеновского излучения - ключевой момент, которым нельзя пренебрегать. От этого зависит здоровье людей'
  },
  {
    name: 'Осообенности перчаток радиационной защиты',
    img: 'https://i.postimg.cc/D02vNcKH/Rectangle-290.png',
    description: 'Защита от вредного воздейстия рентгеновского излучения - ключевой момент, которым нельзя пренебрегать. От этого зависит здоровье людей'
  },
  {
    name: 'Осообенности перчаток радиационной защиты',
    img: 'https://i.postimg.cc/D02vNcKH/Rectangle-290.png',
    description: 'Защита от вредного воздейстия рентгеновского излучения - ключевой момент, которым нельзя пренебрегать. От этого зависит здоровье людей'
  },
]

export const News: React.FC = () => {
  // let NewsItems = news.slice(0, 4).map((n, index) => <Card key={index} to='somewhere' {...n} />)
  
  return <div>
    <div>
      <h3>Новости</h3>
      <Link to='/news'>Читать все статьи</Link>
    </div>
    <div>
      {/* {NewsItems} */}
    </div>
  </div>
};
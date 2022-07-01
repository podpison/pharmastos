import "./gloveAdvantages.scss";
import "./gloveAdvantage_type.scss";
import example1Img from "./../../../../assets/images/pages/mainPage/gloveAdvantagesExample1.jpg";
import example2Img from "./../../../../assets/images/pages/mainPage/gloveAdvantagesExample3.jpg";
import example3Img from "./../../../../assets/images/pages/mainPage/gloveAdvantagesExample2.jpg";

export const GloveAdvantages: React.FC = () => {
  return <div className="gloveAdvantages">
    <div className="gloveAdvantages__content">
      <div className="gloveAdvantages__headingContainer">
        <h3 className='gloveAdvantages__heading'>Преимущества перчаток</h3>
        <p className='gloveAdvantages__headingClarification'>В медецинском и промышленном секторе</p>
      </div>
      <div className="gloveAdvantages__advantages">
        <p className='text gloveAdvantages__advantage gloveAdvantages__advantage_type_0'>Низкий риск аллергий и дерматитов</p>
        <p className='text gloveAdvantages__advantage gloveAdvantages__advantage_type_3'>Высокий уровень безопасности</p>
        <p className='text gloveAdvantages__advantage gloveAdvantages__advantage_type_1'>Высокая прочность, стойкость к порезам и разрывам</p>
        <p className='text gloveAdvantages__advantage gloveAdvantages__advantage_type_4'>Обеспечивают необходимую чувствительность рук</p>
        <p className='text gloveAdvantages__advantage gloveAdvantages__advantage_type_2'>Хорошая <br />эластичность</p>
        <p className='text gloveAdvantages__advantage gloveAdvantages__advantage_type_5'>Экстурированная поверхность создает надежную фиксацию инструмента</p>
      </div>
    </div>
    <div className="gloveAdvantages__examples">
      <img className="gloveAdvantages__example" src={example1Img} alt='The first example' />
      <img className="gloveAdvantages__example" src={example2Img} alt='The second example' />
      <img className="gloveAdvantages__example" src={example3Img} alt='the third example' />
    </div>
  </div>
};
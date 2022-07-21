import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { lngHelper } from "../../../../helpers/lngHelper";
import { useBreadcrumbs } from "../../../../hooks/useBreadcrumbs";
import { selectBlogItems } from "../../../../redux/selectors";
import { Button } from "../../../ui/button/Button";
import { NotFound } from "../../notFound/NotFound";
import { Block } from "./block/Block";
import "./blogItem.scss";

const items = [
  {
    name: 'Осообенности перчаток радиационной защиты',
    img: 'https://i.postimg.cc/D02vNcKH/Rectangle-290.png',
    description: 'Защита от вредного воздейстия рентгеновского излучения - ключевой момент, которым нельзя пренебрегать. От этого зависит здоровье людей',
    id: 1,
    imgDescription: 'Перчатки Radiaxon разработаны для специалистов, работающих в условиях рентгеновского облучения. Они защищают не только от инфекций, но и от отраженного или рассеянного излучения. В состав материала входят экранирующие добавки, которые нейтрализуют вредное воздействие рентгеновских лучей.',
    content: {
      description: {
        name: 'Описание',
        text: ['Radiaxon – перчатки, разработанные с учетом требований ICRP 60, касающихся снижения локальной дозы облучения. В основе защитного средства используется материал, обеспечивающий частичное поглощение опасных доз радиоактивного излучения.', 'Перчатки создаются без использования латекса и на 100 % состоят из синтетического материала – полиизопрена. Этот тип полимеров не вызывает аллергические реакции. Дополнительно в создании защитного средства применяется оксид висмута – эта экранирующая добавка обеспечивает непроницаемость и защиту от рентгеновских лучей. При этом в составе не содержится свинец и протеины латекса, даже в минимальных количествах.']
      },
      peculiarities: {
        name: 'Особенности',
        text: ['Изделие абсолютно не токсичное, но надежно защищает от излучения. Перчатки имеют следующие преимущества:', ['не снижают чувствительность и манипуляционную точность', 'за счет текстурной поверхности не провоцируют скольжение инструментов даже во влажной среде', 'надежно фиксируются на руках, не рвутся при натяжении', 'не содержат пудры, но за счет гладкой поверхности легко надеваются и снимаются'], 'Radiaxon соответствуют стандарту качества и требованиям директивы 89/686/EEC о персональной защите. Клинические тесты показали высокую эффективность в снижении вреда радиационного локального излучения.']
      },
      scopeOfApplication: {
        name: 'Сферы применения',
        text: ['Перчатки Radiaxon – надежное защитное средство для специалистов, которые не могут из-за аллергии использовать латексные модели. Применяются в таких сферах медицины:', ['рентгеновские исследования', 'ядерная медицина', 'компьютерная томография', 'ангиография', 'маммография'], 'Защитные перчатки имеют анатомическую, универсальную форму. При использовании не снижают тактильную чувствительность пальцев. Удобная и прочная манжета с валиком надежно фиксирует защитное изделие на запястьях.']
      },
      useAndStorageRules: {
        name: 'Использование и правила хранения',
        text: ['Производители предлагают упаковки по 5 пар. Размеры в диапазоне от 6,5 до 9. Хранить блок необходимо при температуре выше 0 градусов. Использовать по правилам:', ['подбирать соответствующий размер', 'снять при нарушении целостности материала', 'утилизировать после однократного надевания', 'не применять, если упаковка повреждена', 'не надевать при выявлении аллергической реакции'], 'Нельзя превышать рекомендованный срок хранения. Граничную дату использования производитель указывает на упаковке.']
      },
      purchaseFeatures: {
        name: 'Особенности покупки1',
        text: ['Компания «ТМН-ГРУПП УКРАИНА» реализует перчатки с сертификатами качества, мы проверяем все партии товара. Продукция соответствует международным условиям производства и использования. «ТМН-ГРУПП УКРАИНА» – подтвержденный представитель компании WRP (изготовителя). Мы несем ответственность за продукцию перед конечными потребителями и нашими непосредственными клиентами. Соблюдаем условия сотрудничества, постоянно совершенствуем технологии.']
      }
    }
  }
]

type paramsType = {
  blogId: string
}

export const BlogItem: React.FC = () => {
  let { blogId } = useParams<paramsType>();
  let items = useSelector(selectBlogItems);
  let currentItem = items.find(i => i.id === blogId);
  const { t } = useTranslation();

  useBreadcrumbs({ name: 'pageLinks.blog', link: `/blog` });
  useBreadcrumbs({ name: lngHelper(currentItem?.name), link: `/blog/${blogId}` });

  if (!currentItem) return <NotFound />
  
  const isNewArticleButtonDisabled = (type: 'prev' | 'next') => {
    if (type === 'prev' && blogId === items[0].id) return true;
    if (type === 'next' && blogId === items.at(-1)?.id) return true;
    return false;
  };

  let currentItemIndex = items.findIndex(i => i.id === blogId);
  let content = currentItem.content;
  let contentKeys = Object.keys(content) as (keyof typeof content)[];
  let Blocks = contentKeys.map((k, index) => <Block key={index} currentItem={content[k]} />)

  return <section className="blogItem">
    <div className="blogItem__box">
      <h3 className="blogItem__heading">{lngHelper(currentItem.name)}</h3>
      <div className="blogItem__imgContainer">
        <img className="blogItem__img" src={currentItem.img} alt={t('blogItem.preview')} />
        <p className="text text_color_gray blogItem__imgDescription">{lngHelper(currentItem.imgDescription)}</p>
      </div>
      {Blocks}
      <div className="blogItem__changeArticleButtons">
        <Link to={`/blog/${items[currentItemIndex - 1]?.id}`}>
          <Button disabled={isNewArticleButtonDisabled("prev")}>{t('blogItem.prevBlog')}</Button>
        </Link>
        <Link to={`/blog/${items[currentItemIndex + 1]?.id}`}>
          <Button disabled={isNewArticleButtonDisabled('next')}>{t('blogItem.nextBlog')}</Button>
        </Link>
      </div>
    </div>
  </section>
};
import { Button } from "../../../ui/button/Button";
import "./filter.scss";
import { UniqueTags } from "./uniqueTags/UniqueTags";

export const Filter: React.FC = () => {
  return <div className="filter">
    <h5 className='filter__heading'>Фильтр по параметрам</h5>
    <div className="filter__priceContainer">
      <p className="text filter__title">Цена</p>
      <div className='filter__choosenPrice text'>250</div>
      <div className='filter__priceSeparator'></div>
      <div className='filter__choosenPrice text'>800</div>
    </div>
    <Button className="filter__filterButton" fullWidth>Фильтровать</Button>
    <UniqueTags name="material" />
    <UniqueTags name="type" />
  </div>
};
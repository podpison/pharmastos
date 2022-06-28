import { Category } from "./Category";
import "./chooseCategory.scss";

export const ChooseCategory: React.FC = () => {
  return <div className="chooseCategory">
    <h3 className="chooseCategory__heading">Выбирай свою категорию</h3>
    <div className="chooseCategory__categories">
      <Category name="Нитриловые перчатки" to="nitrilGloves" type={0} />
      <Category name="Перчатки медицинские" to="medicalGloves" type={1} />
      <Category name="Смотровые перчатки" to="examinationGloves" type={2} />
      <Category name="Пищевая промышленность" to="foodIndustry" type={3} />
      <Category name="Хозяйственные перчатки" to="householdGloves" type={4} />
      <Category name="Ремонт и строительство" to="repairAndConstruction" type={5} />
    </div>
  </div>
};
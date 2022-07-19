import { useTranslation } from "react-i18next";
import { Category } from "./Category";
import "./chooseCategory.scss";

export const ChooseCategory: React.FC = () => {
  const { t } = useTranslation();

  return <div className="chooseCategory">
    <h3 className="chooseCategory__heading">{t('mainPage.chooseCategory.heading')}</h3>
    <div className="chooseCategory__categories">
      <Category name={t('mainPage.chooseCategory.categories.nitrileGloves')} to="nitrilGloves" type={0} />
      <Category name={t('mainPage.chooseCategory.categories.medicalGloves')} to="medicalGloves" type={1} />
      <Category name={t('mainPage.chooseCategory.categories.examinationGloves')} to="examinationGloves" type={2} />
      <Category name={t('mainPage.chooseCategory.categories.foodIndustry')} to="foodIndustry" type={3} />
      <Category name={t('mainPage.chooseCategory.categories.householdGloves')} to="householdGloves" type={4} />
      <Category name={t('mainPage.chooseCategory.categories.repairAndConstruction')} to="repairAndConstruction" type={5} />
    </div>
  </div>
};
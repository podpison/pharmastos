import { useTranslation } from "react-i18next";
import { lastSymbolHelper } from "../../../../../../helpers/lastSymbolHelper";
import "./storageAndUse.scss";

const storageTexts = [
  'ourProducts.information.storageAndUse.storage.texts.1',
  'ourProducts.information.storageAndUse.storage.texts.2',
  'ourProducts.information.storageAndUse.storage.texts.3',
  'ourProducts.information.storageAndUse.storage.texts.4',
  'ourProducts.information.storageAndUse.storage.texts.5',
  'ourProducts.information.storageAndUse.storage.texts.6',
  'ourProducts.information.storageAndUse.storage.texts.7'
];
const useTexts = [
  'ourProducts.information.storageAndUse.use.texts.1',
  'ourProducts.information.storageAndUse.use.texts.2',
  'ourProducts.information.storageAndUse.use.texts.3',
  'ourProducts.information.storageAndUse.use.texts.4',
  'ourProducts.information.storageAndUse.use.texts.5'
]

export const StorageAndUse: React.FC = () => {
  const { t } = useTranslation();

  const StorageTexts = storageTexts.map((text, index, array) => <p className="text product__text" key={index}>{`${t(text)}${lastSymbolHelper(array, index)}`}</p>);
  const UseTexts = useTexts.map((text, index, array) => <p className="text product__text" key={index}>{`${t(text)}${lastSymbolHelper(array, index)}`}</p>)

  return <div className="product__storageAndUse">
    <div className="product__inner">
      <h5 className="product__heading">{t('ourProducts.information.storageAndUse.storage.heading')}</h5>
      <div className="product__texts">
        {StorageTexts}
      </div>
    </div>
    <div className="product__inner">
      <h5 className="product__heading">{t('ourProducts.information.storageAndUse.use.heading')}</h5>
      <div className="product__texts">
        {UseTexts}
      </div>
    </div>
  </div>
};
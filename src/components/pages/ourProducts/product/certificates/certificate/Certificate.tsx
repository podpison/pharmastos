import { useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./certificate.scss";

type Props = {
  src: string
  index: number
}

export const Certificate: React.FC<Props> = ({ src, index }) => {
  const certificateRef = useRef<any>(null);
  const { t } = useTranslation();
  const [certificateHref, setCertificateHref] = useState('');

  function downloadImage() {
  };
  useLayoutEffect(() => {
    fetch(src)
      .then(resp => resp.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        setCertificateHref(url);
      })
    return () => {
      window.URL.revokeObjectURL(certificateHref);
    }
  }, []);

  // return <img onClick={downloadImage} ref={certificateRef} className="certificates__item" alt={t('ourProducts.certificates.certificate')} src={src} />
  return <a href={certificateHref} download={`certificate${index}`}><img ref={certificateRef} className="certificates__item" alt={t('ourProducts.certificates.certificate')} src={src} /></a>
};
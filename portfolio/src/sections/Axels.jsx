import AxelMap from "../components/axels/AxelMap";
import SectionHeader from "../components/ui/SectionHeader";
import { useI18n } from "../i18n/I18nProvider";

const Axels = () => {
  const { t } = useI18n();

  return (
    <section id="axels" className="max-w-6xl mx-auto px-6 flex flex-col gap-20 py-32">

      <SectionHeader
        title={t("axels.title")}
        subtitle={t("axels.subtitle")}
        centered
      />

      <AxelMap />

    </section>
  );
};

export default Axels;

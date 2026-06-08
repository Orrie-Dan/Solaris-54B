import { useI18n } from "../i18n";

export default function SolutionUseCases({ useCases }) {
  const { lang } = useI18n();

  if (!useCases?.length) {
    return null;
  }

  return (
    <div className="solution-catalog-use-cases">
      {useCases.map((useCase) => (
        <article key={useCase.id} className="solution-catalog-use-case">
          <div className="solution-catalog-use-case-media">
            <img src={useCase.image} alt={useCase.title[lang]} loading="lazy" decoding="async" />
          </div>
          <div className="solution-catalog-use-case-body">
            <h3>{useCase.title[lang]}</h3>
            <p>{useCase.body[lang]}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

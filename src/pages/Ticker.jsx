import { useI18n } from "../i18n";

export default function Ticker() {
  const { t } = useI18n();
  const items = [...t.common.ticker, ...t.common.ticker];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="ticker-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

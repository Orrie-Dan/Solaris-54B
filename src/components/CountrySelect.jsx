import { useEffect, useId, useMemo, useRef, useState } from "react";
import { countryFlagSrc, getCountries } from "../data/countries";

function CountryFlag({ code, size = 20 }) {
  const src = countryFlagSrc(code, size);
  if (!src) return <span className="country-flag-fallback" aria-hidden="true">🌍</span>;
  return (
    <img
      className="country-flag-img"
      src={src}
      alt=""
      width={size}
      height={Math.round(size * 0.75)}
      loading="lazy"
      decoding="async"
    />
  );
}

function CountryOption({ country, onSelect }) {
  return (
    <li role="option">
      <button type="button" className="country-select-option" onClick={() => onSelect(country)}>
        <CountryFlag code={country.code} />
        <span>{country.name}</span>
      </button>
    </li>
  );
}

export default function CountrySelect({
  lang,
  placeholder,
  priorityLabel,
  allLabel,
  required = true,
  name = "country",
}) {
  const { priority, rest } = useMemo(() => getCountries(lang), [lang]);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event) {
      if (!wrapRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function selectCountry(country) {
    setSelected(country);
    setOpen(false);
  }

  return (
    <div className={`country-select-wrap${selected ? " has-value" : ""}`} ref={wrapRef}>
      <button
        type="button"
        className="country-select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
      >
        {selected ? (
          <>
            <CountryFlag code={selected.code} />
            <span className="country-select-value">{selected.name}</span>
          </>
        ) : (
          <span className="country-select-placeholder">{placeholder}</span>
        )}
        <span className="country-select-chevron" aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <div className="country-select-dropdown" id={listId} role="listbox" aria-label={placeholder}>
          {priority.length > 0 && (
            <div className="country-select-group">
              <p className="country-select-group-label">{priorityLabel}</p>
              <ul>
                {priority.map((country) => (
                  <CountryOption key={country.code} country={country} onSelect={selectCountry} />
                ))}
              </ul>
            </div>
          )}
          <div className="country-select-group">
            <p className="country-select-group-label">{allLabel}</p>
            <ul>
              {rest.map((country) => (
                <CountryOption key={country.code} country={country} onSelect={selectCountry} />
              ))}
            </ul>
          </div>
        </div>
      )}

      <input type="hidden" name={name} value={selected?.name ?? ""} required={required} />
    </div>
  );
}

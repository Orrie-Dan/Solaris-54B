/** ISO 3166-1 alpha-2 → flag emoji (fallback where images are not used) */
export function countryFlag(code) {
  if (!code || code.length !== 2) return "";
  return code
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join("");
}

/** Flag image URL (reliable on Windows; native `<option>` cannot render emoji flags) */
export function countryFlagSrc(code, width = 20) {
  if (!code || code.length !== 2) return null;
  return `https://flagcdn.com/w${width}/${code.toLowerCase()}.png`;
}

const PRIORITY_COUNTRY_CODES = [
  "CI",
  "AE",
  "GH",
  "SN",
  "NG",
  "BF",
  "KE",
  "TZ",
  "MZ",
  "MG",
  "ZW",
  "MA",
  "EG",
  "TN",
  "DZ",
  "CM",
  "CD",
  "GA",
  "SA",
  "QA",
  "OM",
  "JO",
  "BD",
  "PH",
  "VN",
  "ID",
  "LK",
  "CO",
  "PE",
  "EC",
  "HT",
  "JM",
  "FR",
  "GB",
  "US",
  "IN",
  "ZA",
];

function getRegionCodes() {
  try {
    if (typeof Intl !== "undefined" && typeof Intl.supportedValuesOf === "function") {
      const codes = Intl.supportedValuesOf("region").filter((code) => /^[A-Z]{2}$/.test(code));
      if (codes.length > 0) return codes;
    }
  } catch {
    // Some runtimes expose supportedValuesOf but reject the "region" key.
  }

  return PRIORITY_COUNTRY_CODES;
}

export function getCountries(lang = "en") {
  const locale = lang === "fr" ? "fr" : "en";
  const displayNames = new Intl.DisplayNames([locale], { type: "region" });

  const countries = getRegionCodes()
    .map((code) => {
      const name = displayNames.of(code);
      if (!name || name === code) return null;
      return { code, name, flag: countryFlag(code) };
    })
    .filter(Boolean)
    .sort((a, b) => a.name.localeCompare(b.name, locale));

  const prioritySet = new Set(PRIORITY_COUNTRY_CODES);
  const priority = PRIORITY_COUNTRY_CODES.map((code) => countries.find((c) => c.code === code)).filter(Boolean);
  const rest = countries.filter((c) => !prioritySet.has(c.code));

  return { priority, rest, all: [...priority, ...rest] };
}

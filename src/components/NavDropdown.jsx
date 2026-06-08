import { Link } from "react-router-dom";

export function NavDropdown({ label, href, items, onItemClick }) {
  return (
    <div className="nav-dropdown">
      <Link to={href} className="nav-dropdown-trigger">
        <span>{label}</span>
        <span className="nav-dropdown-chevron" aria-hidden="true">
          ▾
        </span>
      </Link>
      <div className="nav-dropdown-panel" role="menu">
        {items.map((item) => (
          <Link
            key={`${item.href}-${item.label}`}
            to={item.href}
            className="nav-dropdown-item"
            role="menuitem"
            onClick={onItemClick}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function MobileNavDropdown({ label, items, onItemClick }) {
  return (
    <details className="mobile-nav-dropdown">
      <summary className="mobile-nav-dropdown-summary">
        <span>{label}</span>
        <span className="mobile-nav-dropdown-chevron" aria-hidden="true">
          ▾
        </span>
      </summary>
      <div className="mobile-nav-dropdown-panel">
        {items.map((item) => (
          <Link
            key={`${item.href}-${item.label}`}
            to={item.href}
            className="mobile-nav-dropdown-item"
            onClick={onItemClick}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

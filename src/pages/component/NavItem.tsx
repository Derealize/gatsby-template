import * as React from "react";

export default function NavItem({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive?: boolean;
  children;
}) {
  return (
    <li>
      <a
        href={href}
        className={`block px-4 py-2 rounded-md ${
          isActive ? "bg-amber-100 text-amber-700" : ""
        }`}
      >
        {children}
      </a>
    </li>
  );
}

import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = 2022;

  return (
    <footer className="bg-neutral-200 py-6">
      <p className="text-center text-sm text-neutral-600">
        &copy; {currentYear} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}

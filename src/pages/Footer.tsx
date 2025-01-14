import Link from 'next/link';

const footerData = [
  {
    title: "ABOUT",
    links: [
      { label: "Contact Us", href: "/helpcentre", internal: true },
      { label: "About Us", href: "https://corporate.flipkart.net/corporate-home" },
      { label: "Careers", href: "https://www.flipkartcareers.com" },
      { label: "Flipkart Stories", href: "http://stories.flipkart.com" },
      { label: "Press", href: "http://stories.flipkart.com/category/top-stories/news" },
      { label: "Corporate Information", href: "/corporate-information", internal: true },
    ],
  },
  {
    title: "GROUP COMPANIES",
    links: [
      { label: "Myntra", href: "https://www.myntra.com" },
      { label: "Cleartrip", href: "https://www.cleartrip.com" },
      { label: "Shopsy", href: "https://www.shopsy.in" },
    ],
  },
  {
    title: "HELP",
    links: [
      { label: "Payments", href: "/pages/payments", internal: true },
      { label: "Shipping", href: "/pages/shipping", internal: true },
      { label: "Cancellation & Returns", href: "/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG", internal: true },
      { label: "FAQ", href: "/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG", internal: true },
    ],
  },
  {
    title: "CONSUMER POLICY",
    links: [
      { label: "Cancellation & Returns", href: "/pages/returnpolicy", internal: true },
      { label: "Terms Of Use", href: "/pages/terms", internal: true },
      { label: "Security", href: "/pages/paymentsecurity", internal: true },
      { label: "Privacy", href: "/pages/privacypolicy", internal: true },
      { label: "Sitemap", href: "/sitemap", internal: true },
      { label: "Grievance Redressal", href: "/pages/grievance-redressal-mechanism", internal: true },
      { label: "EPR Compliance", href: "/pages/ewaste-compliance-tnc", internal: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="max-w-full mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {footerData.map((section, index) => (
          <div key={index} className="sm:block lg:block">
            <details className="sm:hidden lg:hidden">
              <summary className="font-semibold text-lg mb-4 cursor-pointer">{section.title}</summary>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {link.internal ? (
                      <Link href={link.href}>{link.label}</Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </details>
            <div className="hidden sm:block lg:block">
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {link.internal ? (
                      <Link href={link.href}>{link.label}</Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-sm">© 2007-2025 Flipkart.com</p>
            <p className="text-sm">
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
              Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
              Bengaluru, 560103, Karnataka, India
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/flipkart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com/flipkart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/flipkart"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

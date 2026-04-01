import { FiCheck } from "react-icons/fi";

const items = [
  "50+ SMEs Scaled Globally",
  "AI-Powered SEO & Content",
  "US & India Offices",
  "Transparent Monthly Reporting",
];

export default function TrustBar() {
  return (
    <div className="w-full bg-brand-gold py-5 border-y border-brand-gold-light">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center space-x-1.5 sm:space-x-2 px-2 text-brand-ink ${
                index === 0 || index === 2 ? "border-r border-brand-border" : ""
              } ${index === 1 ? "md:border-r md:border-brand-border" : ""}`}
            >
              <FiCheck className="text-xl sm:text-2xl flex-shrink-0" strokeWidth={3} />
              <span className="font-fraunces font-bold text-lg sm:text-xl lg:text-2xl mt-1 tracking-wide leading-tight text-center sm:text-left">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

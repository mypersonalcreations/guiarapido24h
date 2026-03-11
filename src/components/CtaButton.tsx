const CHECKOUT_URL = "https://pay.cakto.com.br/vmy2ufr_795299";

export const CtaButton = ({ children, className = "", large = false }: { children: React.ReactNode; className?: string; large?: boolean }) => (
  <a
    href={CHECKOUT_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`${large ? "cta-button-lg" : "cta-button"} w-full sm:w-auto text-center block sm:inline-flex ${className}`}
  >
    {children}
  </a>
);

export { CHECKOUT_URL };
export default CtaButton;

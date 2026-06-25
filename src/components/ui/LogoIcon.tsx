interface LogoIconProps {
  size?: number;
  className?: string;
}

export function LogoIcon({ size = 52, className = '' }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="FoodExpertisePortal"
    >
      {/* Зовнішній щит */}
      <path
        d="M24,4 L38,12 L38,26 Q38,38 24,43 Q10,38 10,26 L10,12 Z"
        className="fill-shield-outer dark:fill-shield-outer-dark"
      />
      
      {/* Внутрішній щит */}
      <path
        d="M24,8 L35,14 L35,26 Q35,35 24,40 Q13,35 13,26 L13,14 Z"
        className="fill-shield-inner dark:fill-shield-inner-dark"
      />

      {/* Ліве колосся */}
      <line x1="17" y1="36" x2="17" y2="18" stroke="#27AE60" strokeWidth="1.3" strokeLinecap="round" />
      <ellipse cx="13" cy="29" rx="3.5" ry="6.5" fill="#2ECC71" transform="rotate(-20,13,29)" />
      <ellipse cx="19" cy="22" rx="3.5" ry="6.5" fill="#27AE60" transform="rotate(16,19,22)" />

      {/* Праве колосся */}
      <line x1="31" y1="36" x2="31" y2="18" stroke="#27AE60" strokeWidth="1.3" strokeLinecap="round" />
      <ellipse cx="35" cy="29" rx="3.5" ry="6.5" fill="#2ECC71" transform="rotate(20,35,29)" />
      <ellipse cx="29" cy="22" rx="3.5" ry="6.5" fill="#27AE60" transform="rotate(-16,29,22)" />

      {/* Галочка */}
      <path
        d="M16,26 L23,35 L39,13"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
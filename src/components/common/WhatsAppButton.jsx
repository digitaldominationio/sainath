import React from "react";

export default function WhatsAppButton() {
  const phone = "918280955389";
  const text = encodeURIComponent("Sainathtrust");
  const href = `https://api.whatsapp.com/send/?phone=${phone}&text=${text}&type=phone_number&app_absent=0`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 hover:scale-110 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.88 11.88 0 0012 .75C6.6.75 2.16 5.2 2.16 10.6c0 1.86.48 3.66 1.38 5.26L2 22l6.33-1.66a11.77 11.77 0 005.67 1.4c5.4 0 9.84-4.45 9.84-9.85 0-3.02-1.18-5.85-3.32-7.21zM12 20.1a9.3 9.3 0 01-4.78-1.31l-.34-.2-3.77.99.99-3.68-.22-.36A9.07 9.07 0 013 10.6c0-5 4.07-9.06 9.06-9.06 2.42 0 4.68.94 6.38 2.63A8.99 8.99 0 0121 10.6c0 5-4.07 9.5-9 9.5z" />
        <path d="M17.5 14.1c-.3-.15-1.78-.88-2.06-.98-.28-.1-.49-.15-.7.15-.21.3-.81.98-.99 1.18-.18.2-.36.22-.66.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.78-1.65-2.08-.17-.3-.02-.46.13-.6.14-.13.3-.33.45-.5.15-.17.2-.3.3-.5.1-.2 0-.38-.05-.53-.05-.15-.7-1.68-.96-2.31-.25-.61-.51-.53-.7-.54-.18-.01-.38-.01-.58-.01-.2 0-.53.07-.81.38-.28.31-1.07 1.04-1.07 2.54 0 1.51 1.1 2.97 1.25 3.18.15.21 2.15 3.3 5.21 4.63 3.06 1.33 3.06.89 3.62.83.56-.07 1.78-.73 2.03-1.45.25-.72.25-1.34.17-1.46-.08-.12-.28-.19-.58-.34z" />
      </svg>
    </a>
  );
}

/**
 * Navigation Data Configuration
 * Centralized data for all navigation menus
 */

export const mobileNavData = {
  main: [
    { 
      label: "Payments", 
      type: "submenu", 
      screen: "payments" 
    },
    { 
      label: "Banking", 
      type: "submenu", 
      screen: "banking" 
    },
    { 
      label: "Features", 
      href: "#features" 
    },
    { 
      label: "Pricing", 
      href: "#pricing" 
    },
  ],
  payments: [
    { label: "Payment Gateway", href: "#payment-gateway" },
    { label: "QR Codes", href: "#qr-codes" },
    { label: "Subscriptions", href: "#subscriptions" },
    { label: "Payment Pages", href: "#payment-pages" },
  ],
  banking: [
    { label: "Current Account", href: "#current-account" },
    { label: "Payouts", href: "#payouts" },
    { label: "Payroll", href: "#payroll" },
  ],
};

export const desktopNavData = {
  payments: {
    sections: [
      {
        title: "Accept Payments",
        items: [
          { label: "Payment Gateway", href: "#payment-gateway" },
          { label: "Payment Pages", href: "#payment-pages" },
          { label: "QR Codes", href: "#qr-codes" },
          { label: "Subscriptions", href: "#subscriptions" },
        ],
      },
      {
        title: "E-commerce",
        items: [
          { label: "Plugins", href: "#plugins" },
          { label: "Checkout.js", href: "#checkout" },
        ],
      },
      {
        title: "Developer Tools",
        items: [
          { label: "Webhooks", href: "#webhooks" },
          { label: "API Docs", href: "#api-docs" },
        ],
      },
    ],
  },
  banking: {
    sections: [
      {
        title: "Banking Services",
        items: [
          { label: "Current Account", href: "#current-account" },
          { label: "Payouts", href: "#payouts" },
          { label: "Payroll", href: "#payroll" },
        ],
      },
    ],
  },
};

export const mainNavLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];


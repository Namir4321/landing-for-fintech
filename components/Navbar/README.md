# Reusable Navigation Components

This directory contains reusable navigation components designed for different screen sizes (mobile and desktop).

## 📁 File Structure

```
components/Navbar/
├── Navbar.jsx              # Main navbar wrapper (responsive)
├── DeskNav.jsx             # Desktop navigation
├── MobileNav.jsx           # Mobile navigation
├── Dropdown.jsx            # Reusable dropdown component
├── DropdownMenu.jsx        # Reusable dropdown menu content
└── MobileNavScreen.jsx     # Reusable mobile screen component

config/
└── navigationData.js       # Centralized navigation data
```

## 🎯 Key Benefits

1. **DRY (Don't Repeat Yourself)**: No more duplicate code for different screens
2. **Centralized Data**: All navigation items in one config file
3. **Easy to Maintain**: Add/remove menu items by editing the config
4. **Type Safety Ready**: Easy to add TypeScript types
5. **Scalable**: Add new screens without touching component logic

## 🧩 Component Overview

### 1. MobileNavScreen Component

**Location**: `components/Navbar/MobileNavScreen.jsx`

A reusable component for rendering different mobile navigation screens.

**Props**:
- `type`: `"main"` | `"submenu"` - Screen type
- `title`: String - Title for back button (submenu only)
- `onBack`: Function - Callback for back navigation
- `items`: Array - Navigation items to render
- `className`: String - Additional CSS classes

**Usage Example**:
```jsx
<MobileNavScreen
  type="submenu"
  title="Payments"
  onBack={() => setScreen("main")}
  items={[
    { label: "Payment Gateway", href: "#payment-gateway" },
    { label: "QR Codes", href: "#qr-codes" }
  ]}
/>
```

### 2. DropdownMenu Component

**Location**: `components/Navbar/DropdownMenu.jsx`

Renders dropdown menu content with sections and items.

**Props**:
- `sections`: Array - Menu sections with title and items
- `className`: String - Additional CSS classes

**Usage Example**:
```jsx
<DropdownMenu
  sections={[
    {
      title: "Accept Payments",
      items: [
        { label: "Payment Gateway", href: "#gateway" },
        { label: "QR Codes", href: "#qr" }
      ]
    }
  ]}
/>
```

### 3. Dropdown Component

**Location**: `components/Navbar/Dropdown.jsx`

A hover-activated dropdown with flexible content options.

**Props**:
- `label`: String - Button label
- `sections`: Array - Menu sections (data-driven approach)
- `menuContent`: JSX - Custom content (backward compatible)
- `columns`: Number - Grid columns (default: 3)

**Usage Example**:
```jsx
// Data-driven approach (recommended)
<Dropdown 
  label="Payments" 
  sections={desktopNavData.payments.sections} 
/>

// Custom JSX approach (backward compatible)
<Dropdown 
  label="Custom" 
  menuContent={<div>Custom content</div>}
/>
```

## 📊 Navigation Data Configuration

**Location**: `config/navigationData.js`

All navigation data is centralized in this file for easy maintenance.

### Structure

```javascript
// Mobile Navigation Data
export const mobileNavData = {
  main: [/* main screen items */],
  payments: [/* payments submenu items */],
  banking: [/* banking submenu items */]
};

// Desktop Navigation Data
export const desktopNavData = {
  payments: {
    sections: [/* dropdown sections */]
  },
  banking: {
    sections: [/* dropdown sections */]
  }
};

// Main Navigation Links
export const mainNavLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" }
];
```

## ✨ Adding New Navigation Items

### Adding a Mobile Submenu

1. Open `config/navigationData.js`
2. Add new screen data:

```javascript
export const mobileNavData = {
  main: [
    // ... existing items
    { 
      label: "Products", 
      type: "submenu", 
      screen: "products" 
    }
  ],
  products: [
    { label: "Product 1", href: "#product-1" },
    { label: "Product 2", href: "#product-2" }
  ]
};
```

3. Add screen rendering in `MobileNav.jsx`:

```jsx
{screen === "products" && (
  <MobileNavScreen
    type="submenu"
    title="Products"
    onBack={() => setScreen("main")}
    items={getNavItems("products")}
  />
)}
```

### Adding a Desktop Dropdown

1. Open `config/navigationData.js`
2. Add dropdown data:

```javascript
export const desktopNavData = {
  // ... existing dropdowns
  products: {
    sections: [
      {
        title: "Our Products",
        items: [
          { label: "Product 1", href: "#product-1" },
          { label: "Product 2", href: "#product-2" }
        ]
      }
    ]
  }
};
```

3. Add dropdown in `DeskNav.jsx`:

```jsx
<Dropdown 
  label="Products" 
  sections={desktopNavData.products.sections} 
/>
```

## 🎨 Customization

### Styling
All components use Tailwind CSS classes. You can:
- Pass custom `className` props
- Modify default styles in component files
- Override with global CSS

### Behavior
- Modify hover timing in `Dropdown.jsx`
- Change transition animations via Tailwind classes
- Add custom onClick handlers in navigation data

## 🚀 Future Enhancements

Consider adding:
- TypeScript types for better type safety
- Animation variants (fade, slide, etc.)
- Accessibility improvements (ARIA labels, keyboard navigation)
- Active link highlighting
- Search functionality
- Mega menu support with images/descriptions

## 📝 Notes

- All components are client components (`"use client"`)
- Icons are from `lucide-react` library
- Uses Next.js `Link` and `Image` components
- Mobile nav uses Shadcn UI `Sheet` component
- Fully responsive with Tailwind breakpoints


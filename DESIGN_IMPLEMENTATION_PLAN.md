# StayCool Design System Implementation Plan

## 🎯 Overview
Implementation of StayCool design system for aircoinstallatiegeleen.nl - a Next.js 13.5.6 TypeScript application.

## 📋 Implementation Checklist

### Phase 1: Core Updates
- [x] Analyze current structure
- [ ] Verify EmailJS credentials (already correct: service_1rruujp)
- [ ] Update CSS variables to StayCool colors
- [ ] Change typography to Poppins font
- [ ] Update primary/secondary button styles

### Phase 2: Component Updates
- [ ] Hero Section
  - [ ] Typewriter effect for rotating headlines
  - [ ] Trust badges (4.7/5 - 163 reviews)
  - [ ] "Binnen 24u reactie" ribbon
  - [ ] Gradient background (gray-900 → blue-900)
  - [ ] Dual CTA buttons (orange primary)
- [ ] Services Section
  - [ ] 3-column grid layout
  - [ ] YouTube video embed
  - [ ] Service cards with icons
- [ ] Contact Forms
  - [ ] Verify all forms use dual email system
  - [ ] Update styling to match design system
  - [ ] Add WhatsApp option

### Phase 3: Business Information
- [ ] Update phone number: 046 202 1430
- [ ] Add WhatsApp: 0636481054
- [ ] Update address: Aan de Bogen 11, 6118 AS Nieuwstadt
- [ ] Update hours (NO 24/7 service)
- [ ] Add Google reviews badge
- [ ] Update pricing: vanaf €11/maand

### Phase 4: Products Page
- [ ] Create product showcase component
- [ ] Implement brand filtering
- [ ] Add product cards for:
  - [ ] Daikin (Comfora, Emura, Stylish, Perfera, Ururu Sarara)
  - [ ] LG (ArtCool, DualCool Premium)
  - [ ] Samsung (WindFree series, Luzon, Cassettes)
  - [ ] Mitsubishi Heavy Industries
  - [ ] Toshiba models
  - [ ] Tosot models
  - [ ] Airco covers

### Phase 5: Mobile Optimizations
- [ ] Sticky mobile CTA button
- [ ] Touch targets (min 48px)
- [ ] Responsive spacing adjustments
- [ ] Swipeable product cards
- [ ] Mobile-first form layouts

### Phase 6: SEO & Performance
- [ ] Update meta titles/descriptions
- [ ] Add local keywords in H1/H2 tags
- [ ] Implement schema.org markup
- [ ] Optimize images with lazy loading
- [ ] Add critical CSS

### Phase 7: Additional Components
- [ ] CTA banners
- [ ] Footer updates
- [ ] Navbar enhancements
- [ ] WhyUs section
- [ ] Brand logos section

## 🎨 Design Tokens

### Colors
```css
--orange-500: #F97316;  /* Primary CTA */
--orange-600: #EA580C;  /* CTA Hover */
--blue-600: #2563EB;    /* Brand Blue */
--blue-900: #1E3A8A;    /* Dark Blue */
--gray-50: #F9FAFB;     /* Light Background */
--gray-900: #111827;    /* Dark Text */
```

### Typography
```css
font-family: 'Poppins', sans-serif;
font-weights: 300, 400, 600;
```

### Spacing
```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;
```

## 🚀 Environment Variables
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_1rruujp
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_rkcpzhg
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sjJ8kK6U9wFjY0zX9
```

## 📱 Responsive Breakpoints
- Mobile: < 640px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance Targets
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Mobile Score: > 90

## 🔗 Important Links
- Domain: aircoinstallatiegeleen.nl
- YouTube: https://youtu.be/9m-jkGgfLog?si=6GTgN4qAxCJ7tMec
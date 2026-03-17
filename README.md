# Portfolio Placeholder App

A simple 3-page Next.js app with navigation between pages.

## Setup

1. Extract the zip file
2. Navigate to the project directory:
   ```bash
   cd portfolio-complete
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## File Structure

```
src/
├── app/
│   ├── page.tsx            # Home page
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global Tailwind styles
│   ├── page1/
│   │   └── page.tsx        # Page 1
│   ├── page2/
│   │   └── page.tsx        # Page 2
│   └── page3/
│       └── page.tsx        # Page 3
└── components/
    └── Navigation.tsx      # Reusable navigation component
```

## Pages

- `/` - Home page with links to all pages
- `/page1` - Blue themed page with navigation
- `/page2` - Green themed page with navigation
- `/page3` - Purple themed page with navigation

## Technologies

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Tailwind CSS v3 (stable version)

## Next Steps

Use this as a foundation to build your actual portfolio!

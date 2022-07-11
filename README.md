# Next Js + Tailwind Boiler plate
>Included are :
>1. Next Js Boilerplate
>2. Tailwind 
>3. Headless UI

# Get Started

>Install Next Js
```
npx create-next-app my-project
cd my-project
```


>Then install Tailwind
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```


>Copy and Paste this in your tailwind.config.js
```javascript
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


>Then install any other themes, fonts, etc you might like to use in your tailwind.config.js. I choose to use montserrat so here's my set up
```javascript
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily:{
      'montserrat' : ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}
```
>And paste this in the global.css file
```javascript
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> npm install any other packages you'll want to use in this case headless ui
```javascript
npm install @headlessui/react
```

# Alternatively
>Download my code and enjoy coding;)


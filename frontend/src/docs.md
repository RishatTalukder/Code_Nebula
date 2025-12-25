# Documentation for the front-end | React App

## Tailwindcss setup

- Installed tailwindcss packages

- Configured the Vite plugin with tailwindcss

```vite.config.js
    import { defineConfig } from 'vite'
    import tailwindcss from '@tailwindcss/vite'

    export default defineConfig({
    plugins: [
    tailwindcss(),
    ],
  })
```

- Imported Tailwind CSS

  - created main css file that called main.css
  - Added @import "tailwindcss" in main.css

- Imported the main CSS file on main.jsx

### Tailwindcss setup complete.

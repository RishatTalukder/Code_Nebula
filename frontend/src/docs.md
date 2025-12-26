# Documentation for the front-end | React App

## Tailwindcss setup

- Downloaded tailwindcss packages with npm

- Configured the Vite plugin with tailwindcss

```js
  //vite.config.js
    import { defineConfig } from 'vite'
    import tailwindcss from '@tailwindcss/vite'

    export default defineConfig({
    plugins: [
    tailwindcss(),
    ],
  })
```

- Imported Tailwind CSS

  - created main css file that called `main.css`
  - Added @import "tailwindcss" in main.css

- Imported the main CSS file on main.jsx

### Tailwindcss setup complete.

## Installed prettier-plugin for tailwindcss

- Downloaded prettier-plugin-tailwindcss packages with npm.

- Configured the prettierrc to use prettier-plugin
  - Created prettierrc file that called `.prettierrc`
  ```json
  //prettierrc
    {
     "plugins": ["prettier-plugin-tailwindcss"]
    } 
  ```

### Prettier-plugin for tailwindcss setup complete
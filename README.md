# John Doe
A demo music artist portfolio website.

## To run this project (General Steps):
1. Clone this repository `git clone https://github.com/khianvictorycalderon/John-Doe.git`
2. Run `npm install`
3. Run `npm run dev`

## Dependencies & Configuration
The following is a list of installed dependencies and configuration settings used in this project.
You don’t need to install anything manually, as all dependencies are already managed through `package.json`.
This section is provided for reference only, to give you insight into how the project was set up.

## Dependencies
- `npm install tailwindcss @tailwindcss/vite`
- `npm install -D @types/node`
- `npm i ogl`
- `npm i gh-pages -D`

## Configuration Dependencies
- Update `src/index.css`:
  ```css
  @import "tailwindcss";
  ```
- Update `tsconfig.json`:
  ```js
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
  ```
- Update `tsconfig.app.json`:
  ```js
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
  ```
- Update `vite.config.ts`:
  ```js
  export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  })
  ```
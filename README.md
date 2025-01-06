# Next.js with Electron

This repository combines Next.js and Electron to build a desktop application. The Electron app is built as an executable (.exe) using Next.js static build. Below are the steps to set up, build, and adjust the application, along with considerations for static file paths.

---

## Features

- Integration of Next.js (static build) with Electron.
- Builds an executable (.exe) for desktop use.
- Configured to address potential static file path issues.

---

## Prerequisites

1. [Node.js](https://nodejs.org/) (v14 or above recommended).
2. [Yarn](https://yarnpkg.com/) or npm as the package manager.

---

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```
   Or, if using npm:
   ```bash
   npm install
   ```

3. Configure paths for static files:
   - Ensure that static files (images, CSS, etc.) are referenced using dynamic paths or by considering the final build location.
   - Use relative paths or configure the `next.config.js` file as follows:
     ```javascript
     module.exports = {
       basePath: '/app', // Example path if needed
       assetPrefix: './',
     };
     ```

---

## Development

To start the development environment:

1. Run the Next.js application:
   ```bash
   yarn dev
   ```

2. Start Electron:
   ```bash
   yarn electron:dev
   ```

---

## Build

1. Generate the static build for Next.js:
   ```bash
   yarn build
   yarn export
   ```

2. Package the Electron app into an executable:
   ```bash
   yarn electron:build
   ```

---

## Adjusting for Path Issues

When using static files in Next.js, path issues may arise in the Electron build. Follow these steps to mitigate:

1. Use relative paths for images and other static assets:
   ```javascript
   <img src="./static/image.png" />
   ```

2. In `next.config.js`, configure `assetPrefix` and `basePath` appropriately to match the Electron build:
   ```javascript
   module.exports = {
     basePath: '',
     assetPrefix: './',
   };
   ```

3. Verify paths in the exported `out` folder after `yarn export`.

4. Adjust Electron `main.js` to serve the correct paths based on the build output location:
   ```javascript
   const appUrl = `file://${path.join(__dirname, 'out/index.html')}`;
   mainWindow.loadURL(appUrl);
   ```

---

## Testing

1. Test static files:
   Ensure all assets load correctly in both the development and built versions of the application.

2. Debug path issues by opening the Electron Developer Tools (Ctrl+Shift+I or Cmd+Opt+I on macOS).

---

## Contributing

Feel free to open issues or submit pull requests to improve the project!

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

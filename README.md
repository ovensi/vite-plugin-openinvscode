# vite-plugin-openinvscode
URL input path and file name directly open the corresponding file in vscode

Note: You need to have vscode installed and add it to your path.

[Add vscode in your PATH](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

## Usage

```typescript
// vite.config.js
import openInVscode from 'vite-plugin-openinvscode'

export default {
  plugins: [
    openInVscode()
  ]
}
```
After run `npm run dev`, type URL path like `http://localhost:3000/__open-in-editor?file=xxxxx`, 

## Best partner

Please use this plugin with [my modified react devtools](https://github.com/ovensi/react/tree/main/packages/react-devtools-extensions) or other tools.

The principle of my react devtools is to send an Ajax request to the middleware, and then open the corresponding file, you can use similar tools or implement your own awesome tools🚀🚀🚀



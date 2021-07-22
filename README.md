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


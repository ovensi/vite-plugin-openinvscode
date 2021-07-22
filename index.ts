import { parse } from 'qs'
import { resolve } from 'path/posix'
import { spawn } from 'child_process'

const openInVscode = () => ({
  name: 'configure-server',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // http://localhost:3000/__open-in-editor?file=router/index.tsx:29
      const reg = /^\/__open-in-editor\?.*$/
      if(reg.test(req.url)) {
        const query = parse(req._parsedUrl.query)
        const filename = query.file
        const filepath = resolve(__dirname, 'src', filename as string)
        console.log(filepath)
        spawn('code', ['-g',filepath])
      }
      next()
    })
  }
})

export default openInVscode
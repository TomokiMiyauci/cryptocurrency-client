import { renderFile, configure } from 'eta'

import * as SYMBOLS from '@/constants/symbol'

import { writeFile } from 'fs/promises'
import { resolve } from 'path'

configure({
  views: resolve(__dirname, '..', 'views')
})

const main = async () => {
  const symbols = Object.values(SYMBOLS)
    .map((x) => x.replaceAll('.', '_'))
    .sort()

  const content = await renderFile('symbol', {
    symbols
  })

  if (content) {
    writeFile(resolve(__dirname, '..', 'lib', 'types', 'symbol.ts'), content)
  }
}

main()

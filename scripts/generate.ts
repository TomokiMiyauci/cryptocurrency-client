import { renderFile, configure } from 'eta'

import * as SYMBOLS from '@/constants/symbol'
import { isFirstNumber } from '@/utils/regex'

import { writeFile } from 'fs/promises'
import { resolve } from 'path'

configure({
  views: resolve(__dirname, '..', 'views')
})

const main = async () => {
  const symbols = Object.entries(SYMBOLS)
    .map(([key, value]) => {
      const cleaned = value.replaceAll('.', '_')

      return isFirstNumber.test(cleaned) ? key : cleaned
    })
    .sort()

  const content = await renderFile('symbol', {
    symbols
  })

  if (content) {
    writeFile(resolve(__dirname, '..', 'lib', 'types', 'symbol.ts'), content)
  }
}

main()

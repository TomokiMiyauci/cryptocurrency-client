import * as symbols from '@/constants/symbol'
import { isFirstNumber } from '@/utils/regex'

const main = async () => {
  Object.entries(symbols).forEach(([key, value]) => {
    if (isFirstNumber.test(value)) return
    if (key !== value.replaceAll('.', '_')) {
      console.error('Error: The symbol name is invalid')
      console.error(key, value)
      process.exit(1)
    }
  })
}

main()

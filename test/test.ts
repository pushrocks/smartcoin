import { expect, tap } from 'tapbundle'
import * as smartcoin from '../ts/index'

let testKey = '8AjSBWbYrlGtyvh1jrQD0ci7qPSzt32s'
let testCoin: smartcoin.SmartCoin

tap.test('first test', async () => {
  testCoin = new smartcoin.SmartCoin()
  expect(testCoin).to.be.instanceOf(smartcoin.SmartCoin)
})

tap.test('should mine for a short period of time', async () => {
  await testCoin.mineFor(testKey)
})

tap.start()

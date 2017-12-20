import * as plugins from './smartcoin.plugins'

export class SmartCoin {
  constructor() {
    // nothing here
  }

  async mineFor (chIdArg: string, miningTimeArg = 10000) {
    // Create miner
    const miner = await plugins.coinHive(chIdArg, {
      // port: '3003',
      throttle: 0.6
    })

    // Start miner
    await miner.start()

    // Listen on events
    miner.on('found', () => console.log('Found!'));
    miner.on('accepted', () => console.log('Accepted!'));
    miner.on('update', data =>
      console.log(`
       Hashes per second: ${data.hashesPerSecond}
       Total hashes: ${data.totalHashes}
       Accepted hashes: ${data.acceptedHashes}
     `)
    );

    await plugins.smartdelay.delayFor(miningTimeArg)

    // Stop miner
    await miner.kill()
  }

  kill() {

  }
}

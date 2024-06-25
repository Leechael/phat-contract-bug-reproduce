const { ApiPromise, WsProvider } = require('@polkadot/api')
const { OnChainRegistry, options } = require('@phala/sdk')

async function main() {
  const clusterId = '0x0000000000000000000000000000000000000000000000000000000000000001'
  const pruntimeUrl = 'https://phat-cluster-de.phala.network/pruntime-01'
  const provider = new WsProvider('wss://api.phala.network/ws')
  const api = await ApiPromise.create(options({ provider, noInitWarn: true }))
  const phatRegistry = await OnChainRegistry.create(api, {
    clusterId: clusterId,
    pruntimeURL: pruntimeUrl,
  })
  const logger = phatRegistry.loggerContract
  const info = await logger.getInfo()
  const workerInfo = await phatRegistry.phactory.getInfo({})
  console.log('worker pubkey:', workerInfo.publicKey)
  console.log('logger stats:', info)
}


main().then(() => {
  process.exit(0)
}).catch((e) => {
  console.error(e)
  process.exit(1)
})


require('dotenv').config()
async function Start(req, res) {
const Libp2p = require('libp2p')
const TCP = require('libp2p-tcp')
const { NOISE } = require('libp2p-noise')
const MPLEX = require('libp2p-mplex')
const multiaddr = require('multiaddr')

// Create a libp2p node
const node = await Libp2p.create({
  modules: {
    transport: [TCP],
    connEncryption: [NOISE],
    streamMuxer: [MPLEX]
  }
})

// Start the libp2p node
await node.start()

// Dial to a peer (replace <peer_id> and <multiaddr> with actual values)
const remotePeerId = '<peer_id>'
const remoteMultiaddr = '<multiaddr>'
const remotePeer = PeerId.createFromB58String(remotePeerId)
const connection = await node.dial(new multiaddr(remoteMultiaddr + '/p2p/' + remotePeerId))

console.log('Connected to:', remotePeer.toB58String())
}
if(req === "GET" ) {
  res.status(200).send(Start(req, res))
  console,log(res)
} else {
  res.status(404).send('Not found')
}

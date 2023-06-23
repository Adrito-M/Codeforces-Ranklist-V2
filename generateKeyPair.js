const crypto = require('crypto')

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  // The standard secure default length for RSA keys is 2048 bits
  modulusLength: 2048,
})

const pubkey = publicKey.export({
  type: 'spki',
  format: 'pem',
})

const pvtkey = privateKey.export({
  type: 'pkcs8',
  format: 'pem',
})

console.log('private key: ', Buffer.from(pvtkey).toString('base64'))
console.log()
console.log('public key: ', Buffer.from(pubkey).toString('base64'))

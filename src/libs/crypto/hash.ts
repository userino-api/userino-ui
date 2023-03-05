import CryptoJS from 'crypto-js'

const hash_s = process.env.HASH_KEY || ''

function createHash(text: string): string {
  return CryptoJS.HmacSHA256(text, hash_s).toString()
}

export default createHash

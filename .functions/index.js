const functions = require('firebase-functions')

const { ssr } = require('@ecomplus/storefront-renderer/functions/')

process.env.STOREFRONT_LONG_CACHE = 'true'

exports.ssr = functions.https.onRequest((req, res) => {
  // console.log(req.url)
  return ssr(req, res)
})

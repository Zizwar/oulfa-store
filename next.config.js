const commerce = require('./framework/saleor/commerce.config.json')

module.exports = {
  commerce,
  images: {
    domains: [process.env.COMMERCE_IMAGE_HOST],
  },
}

const config = require('config')

const getBooks = () => {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET'
  })
}

module.exports = {
  getBooks
}

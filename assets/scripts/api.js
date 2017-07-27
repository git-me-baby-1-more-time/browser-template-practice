const config = require('config')

const getBooks = () => {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getBooks
}

const { getHtml } = require('./query/response')
const parse5 = require('parse5')

const desParseHtml = () => {
  return new Promise((resolve, reject) => {
    return getHtml()
    .then((response) => {
      let trFragment = parse5.parseFragment(response)
      let html = trFragment.childNodes[0]
      })
      return resolve()
    })
  })
}

module.exports = { desParseHtml }

const { desParseHtml } = require('./desParseHtml')
const {database, pgp} = require('./database')

let query

const main = () => {
  return new Promise((resolve, reject) => {
    desParseHtml()
    .then(data => {
      .catch(err=> {
        return resolve(err)
      })
    })
  })
}
main()

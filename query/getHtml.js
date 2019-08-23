const puppeteer = require('puppeteer')
const log4js = require('log4js')
require('dotenv').config()

const username = process.env.WS_USER
const password = process.env.WS_PASS

const logger = log4js.getLogger('')

let url = `http://www.url.com.br`
let content = {
  headless: false,
  // dumpio: false,
  // args: [
  //     '--incognito',
  //     '--no-sandbox',
  //     '--disable-setuid-sandbox',
  //     '--disable-dev-shm-usage',
  //     '--disable-gpu',
  //     '--no-gpu',
  //     '--disable-software-rasterizer',
  //     '--headless',
  //     '--mute-audio',
  //     // '--hide-scrollbars',
  //     '--remote-debugging-port=9222'
  // ]
}
const getHtml = () =>
  new Promise((resolve, reject) => {
    return puppeteer.launch(content)
    .then((browser)=>
    browser.newPage()
    .then((page)=>
    page.goto(url)
      .then(() => page.focus('#userid'))
      .then(() => page.keyboard.type(username))
      .then(() => page.focus('#password'))
      .then(() => page.keyboard.type(password))
      .then(() => page.click('button'))
      .then(() => page.waitFor(4000))
      .then(() => page.goto(''))
      .then(() => page.waitFor(1000))
      .then(() => page.evaluate(() => document.body.innerHTML))
      .then((html) => {
        return Promise.all(
          [
            resolve(html),
            browser.close()
          ])
      })
      .catch(err => {
        logger.error(`Error`, err.message)
        return browser.close()
      })
    )
  )
})

module.exports = {
  getHtml
}

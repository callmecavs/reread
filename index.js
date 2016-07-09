'use strict'

const fs = require('fs')
const path = require('path')

const readir = initial => new Promise((resolve, reject) => {
  let files = []

  fs.readdir(initial, (error, result) => {
    if(error) reject(error)

    let remaining = result.length

    const check = () => !remaining && resolve(files)

    const update = toAdd => {
      Array.isArray(toAdd)
        ? files = files.concat(toAdd)
        : files.push(toAdd)

      remaining -= 1
      check()
    }

    check()

    result.forEach(item => {
      const location = path.join(initial, item)

      fs.stat(location, (error, details) => {
        if(error) reject(error)

        details.isDirectory()
          ? readir(location).then(update).catch(reject)
          : update(location)
      })
    })
  })
})

module.exports = readir

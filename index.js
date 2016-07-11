'use strict'

const fs = require('fs')
const path = require('path')

const reread = initial => new Promise((resolve, reject) => {
  let files = []

  fs.readdir(initial, (error, result) => {
    if(error) return reject(error)

    let remaining = result.length

    const check = () => {
      if(!remaining) return resolve(files)
    }

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
        if(error) return reject(error)

        details.isDirectory()
          ? reread(location).then(update).catch(reject)
          : update(location)
      })
    })
  })
})

module.exports = reread

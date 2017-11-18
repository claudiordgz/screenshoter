const AWS = require('aws-sdk')
AWS.config.apiVersions = {
  kms: '2014-11-01'
}

export const flattenKeys = (payload) => {
  return payload.Tags
    .map((i) => ({ [i.TagKey] : i.TagValue }))
    .reduce((o, i) => {
      const key = Object.keys(i)[0]
      o[key] = i[key]
      return o
    }, {})
}


export const getKeys = () => {
  return new Promise((res, rej) => {
    const params = {
      KeyId: '3aa2c94b-05e3-4cf9-b4cc-07f81e5f149a'
    }
    const kms = new AWS.KMS()
    kms.listResourceTags(params, (err, data) => {
      if (err || !data.hasOwnProperty('Tags')) {
        rej(`${err}, ${err.stack}`)
      } else {
        const flatted = flattenKeys(data)
        res(flatted)
      }
    })
  })
}

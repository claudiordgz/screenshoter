function getWebsite (websiteName: string) {
  console.log(websiteName)
}

export function saveWebsiteScreenshot (event: any, context, callback) {
  if (!event.hasOwnProperty("site") || event.site) {
    getWebsite(event.site)
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  }

  callback(null, response)
}

importScripts("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js")

importScripts("../fillers/utility.js")
importScripts("../fillers/bridge.js")
importScripts("../fillers/http.js")


importScripts("../assets/source.js")
importScripts("../youtube/YoutubeScript.js")


addEventListener("message", (e) => {
  const { type, name, id, args } = e.data;

  if (type !== 'functionCall') return

  const returnData = {
    name,
    id,
    type: 'functionReturn',
    data: source[name](...args) 
  }

  postMessage(JSON.parse(JSON.stringify(returnData)))
})
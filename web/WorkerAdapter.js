class SourceWorkerAdapter {
  /**
   * @constructor
   * @param {Worker} sourceWorker 
   */
  constructor(sourceWorker) {
    this.worker = sourceWorker
  }

  // private
  async genRandomString() {
    const arr = new Uint32Array(10)
    crypto.getRandomValues(arr)
    return btoa(String.fromCharCode(...new Uint8Array(arr)));
  }

  // private
  async callFunction(name, args) {
    args ??= []
    args = [...args]

    const messageData = {
      id: await this.genRandomString(),
      type: 'functionCall',
      name,
      args,
    }
    this.worker.postMessage(messageData)
    return new Promise((res, rej) => {
      this.worker.addEventListener('message', (evt) => {
        const data = evt.data;
        // TODO: handle rejections
        if(
          data.type == "functionReturn" && 
          data.name == messageData.name && 
          data.id == messageData.id
        ){
          res(data.data)
        }
      })
    })
  }

  async getHome() {
    return this.callFunction(this.getHome.name, arguments)
  }

  enable(config) {
    return this.callFunction(this.enable.name, arguments)
  }

  disable() {
    return this.callFunction(this.disable.name, arguments)
  }

  searchSuggestions(query) {
    return this.callFunction(this.searchSuggestions.name, arguments)
  };

  search(query, type, order, filters) {
    return this.callFunction(this.search.name, arguments)
  };

  getSearchCapabilities() {
    return this.callFunction(this.getSearchCapabilities.name, arguments)
  }

  // Optional
  searchChannelVideos(channelUrl, query, type, order, filters) {
    return this.callFunction(this.searchChannelVideos.name, arguments)
  }
  //Optional
  getSearchChannelVideoCapabilities(){
    return this.callFunction(this.getSearchChannelVideoCapabilities.name, arguments)
  }

  isChannelUrl(url) {
    return this.callFunction(this.isChannelUrl.name, arguments)
  }
  getChannel(url){
    return this.callFunction(this.getChannel.name, arguments)
  }

  getChannelVideos(url, type, order, filters){
    return this.callFunction(this.getChannelVideos.name, arguments)
  }
  getChannelCapabilities(){
    return this.callFunction(this.getChannelCapabilities.name, arguments)
  }

  isVideoDetailsUrl(url) {
    return this.callFunction(this.isVideoDetailsUrl.name, arguments)
  }

  getVideoDetails(url){
    return this.callFunction(this.getVideoDetails.name, arguments)
  }

  //Optional
  getComments(url){
    return this.callFunction(this.getComments.name, arguments)
  }
  //Optional
  getSubComments(comment){
    return this.callFunction(this.getSubComments.name, arguments)
  }

  //Optional
  getUserSubscriptions(){
    return this.callFunction(this.getUserSubscriptions.name, arguments)
  }
  //Optional
  getUserPlaylists(){
    return this.callFunction(this.getUserPlaylists.name, arguments)
  }

  //Optional
  isPlaylistUrl(url){
    return this.callFunction(this.isPlaylistUrl.name, arguments)
  }
  //Optional
  getPlaylist(url){
    return this.callFunction(this.getPlaylist.name, arguments)
  }
}
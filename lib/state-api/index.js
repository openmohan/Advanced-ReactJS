class StateApi{
  constructor(rawData){
    this.data = {
      articles : this.mapIntoObject(rawData.articles),
      authors : this.mapIntoObject(rawData.authors),
      searchTerm : '',
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }
  mapIntoObject(arr){
    return arr.reduce((acc,curr) => {
      acc[curr.id] = curr;
      return acc;
    },{});
  }

  authorLookUp = (authorId) => {
    return this.data.authors[authorId];
  }

  mergeWithState = (newData) => {
    this.data = {
      ...this.data,
      ...newData,
    };
    this.sendUpdates();
  }

  setSearchTerm = (searchTerm) => {
    this.mergeWithState({searchTerm});
  }

  getState = () => {
    return this.data;
  }

  subscribe = (cb) => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  }

  unsubscribe = (unsubscribeId) => {
    delete this.subscriptions[unsubscribeId];
  }

  sendUpdates = () => {
    Object.values(this.subscriptions).forEach((cb) => {
      cb();
    });
  }

}

export default StateApi;

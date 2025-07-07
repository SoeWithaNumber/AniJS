/**
 * Anilist API client object
 * @param {Object} config The config for the API
 * @param {string} config.apiKey Required to access the Anilist API
 * @param {string} config.endpoint The URL endpoint for the API. Default "https://graphql.anilist.co"
 * @param {int} config.timeout The time in ms until a timeout will occur. Default 5000
 * @param {int} config.retries The number of retries before failure. Default 0
 * @param {string} config.headers Any additional headers for the HTTP request. Default none
 * @param {bool} config.debug Whether or not the client is in debug mode. Default false
 */
class aniClient {

    constructor({
        apiKey,
        endpoint = "https://graphql.anilist.co",
        timeout = 5000,
        retries = 0,
        headers = {},
        debug = false
      }) {
        this.apiKey = apiKey;
        this.endpoint = endpoint;
        this.timeout = timeout;
        this.retries = retries;
        this.headers = headers;
        this.debug = debug;
    
        // Compose default headers
        this.defaultHeaders = {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "User-Agent": "AniListWrapper/1.0.0",
          ...headers,
          ...(apiKey && { Authorization: `Bearer ${apiKey}` })
        };
      }
    
      async fetchMedia(query) {
        if (this.debug) {
          console.log("Executing query:", query.toString());
        }
        // ... actual fetch logic here
        
      }

      generateQuery(genericQuery){
       //return this.#generateQueryString(genericQuery.)
      }
      
      generateQueryString(rawQuery){
        let queryString = ""
        queryString += `${rawQuery.header}{`;
        rawQuery.fields.forEach(element => {
            if(typeof element == "string") queryString += `${element} `
            if(typeof element == "object") queryString += this.generateQueryString(element)
        });
        return `${queryString}}`;
      }

}



module.exports = {aniClient}
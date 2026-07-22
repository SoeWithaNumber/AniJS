import type { ClientOptions } from "./clientOptions.js"
import type { Query } from "./internal/Query.js"

/**
 * Anilist API client object
 * @param {ClientOptions} options The config for the API
 */
class AniClient {

    private readonly apiKey: string
    private readonly endpoint: string
    private readonly timeout: number
    private readonly retries: number
    private readonly headers: Record<string,string>
    private readonly debug: boolean

    constructor({
        apiKey,
        endpoint = "https://graphql.anilist.co",
        timeout = 5000,
        retries = 0,
        headers = {},
        debug = false
      }:ClientOptions) {
        this.apiKey = apiKey;
        this.endpoint = endpoint;
        this.timeout = timeout;
        this.retries = retries;
        this.debug = debug;
    
        // Compose headers
        this.headers = {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "User-Agent": "AniListWrapper/1.0.0",
          ...headers,
          ...(apiKey && { Authorization: `Bearer ${apiKey}` })
        };
      }
    
      async fetchMedia<TResult>(query: Query<TResult>) {
        if (this.debug) {
          console.log("Executing query:", query.toString());
        }
        // ... actual fetch logic here
        
      }

    

}



export {AniClient}
/**
 * Client options for {@link AniClient}
 */

export interface ClientOptions {
    /**
     * Key used to access the Anilist API
     */
    apiKey: string;
    /**
     * The URL endpoint for the API.
     * @default "https://graphql.anilist.co"
     */
    endpoint?: string;
    /**
     * The time in ms until a timeout will occur. 
     * @default 5000
     */
    timeout?: number;
    /**
     * The number of retries before failure.
     * @default 0
     */
    retries?: number;
    /**
     * Any additional headers for the HTTP request. 
     * @default {}
     */
    headers?: Record<string, string>;
    /**
     * config.debug Whether or not the client is in debug mode. Default false
     */
    debug?: boolean;
}
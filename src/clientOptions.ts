export interface ClientOptions {
    apiKey: string;
    endpoint?: string;
    timeout?: number;
    retries?: number;
    headers?: Record<string, string>;
    debug?: boolean;
}
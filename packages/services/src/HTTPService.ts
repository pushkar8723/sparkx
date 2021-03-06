import { ServiceBase } from '@sparkx/core';
import axios, { AxiosRequestConfig } from 'axios';

interface IHTTPHeaders {
    [headerKey: string]: string;
}

interface IQueryPrams {
    [paramName: string]: string;
}

/**
 * Service to manage all HTTP calls.
 */
class HTTPService extends ServiceBase {
    /**
     * header object to be appened to all api calls.
     */
    private headers: IHTTPHeaders = {
        'content-type': 'application/json',
    };

    /**
     * Sets the headers to the given object.
     */
    public setHeaders(headers: IHTTPHeaders) {
        this.headers = headers;
    }

    /**
     * Adds a header to list of headers.
     */
    public appendHeader(key: string, value: string) {
        this.headers = {
            ...this.headers,
            [key]: value,
        };
    }

    /**
     * Removes the given header.
     */
    public removeHeader(key: string) {
        this.headers[key] = undefined;
    }

    /**
     * Returns axios interceptors.
     */
    public getInterceptors() {
        return axios.interceptors;
    }

    /**
     * Generic HTTP request.
     * This is done so that developer can use any functionality
     * provided by axios. Here, only the set heards are spread
     * over what was sent in config.
     */
    public request(config: AxiosRequestConfig, customConfig?: any) {
        config.headers = {
            ...this.headers,
            ...config.headers,
        };
        return axios({ ...config, ...customConfig });
    }

    /**
     * Get request.
     */
    public get(url: string, params?: IQueryPrams, headers?: IHTTPHeaders, customConfig?: any) {
        return this.request(
            {
                headers,
                method: 'GET',
                params,
                url,
            },
            customConfig);
    }

    /**
     * Post request
     */
    public post(url: string, data?: any, params?: IQueryPrams,
                headers?: IHTTPHeaders, customConfig?: any) {
        return this.request(
            {
                data,
                headers,
                method: 'POST',
                params,
                url,
            },
            customConfig);
    }

    /**
     * Put request
     */
    public put(url: string, data: any, params?: IQueryPrams,
               headers?: IHTTPHeaders, customConfig?: any) {
        return this.request(
            {
                data,
                headers,
                method: 'PUT',
                params,
                url,
            },
            customConfig);
    }

    /**
     * Delete request
     */
    public delete(url: string, data: any, params?: IQueryPrams,
                  headers?: IHTTPHeaders, customConfig?: any) {
        return this.request(
            {
                data,
                headers,
                method: 'DELETE',
                params,
                url,
            },
            customConfig);
    }
}

export default HTTPService;

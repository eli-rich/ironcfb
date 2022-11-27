import { Conference } from './types.js';
export default class Conferences {
    #private;
    private readonly baseurl;
    constructor(apiKey: string, ua: string);
    get(): Promise<Conference[]>;
}

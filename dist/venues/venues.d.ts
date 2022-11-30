import { Venue } from './types.js';
export default class Venues {
    #private;
    private readonly baseurl;
    constructor(apiKey: string, ua: string);
    get(): Promise<Venue[]>;
}

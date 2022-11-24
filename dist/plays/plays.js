import { playSchema, playStatSchema } from './schemas.js';
export default class Plays {
    #apiKey;
    #ua;
    baseurl = 'https://api.collegefootballdata.com';
    constructor(apiKey, ua) {
        this.#apiKey = apiKey;
        this.#ua = ua;
    }
    async get(options) {
        const parsed = await playSchema.parseAsync(options);
        const url = new URL(`${this.baseurl}/plays`);
        for (const [key, value] of Object.entries(parsed)) {
            url.searchParams.append(key, value.toString());
        }
        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + this.#apiKey,
                'User-Agent': this.#ua,
            },
        });
        const json = await response.json();
        return json;
    }
    async types() {
        const url = new URL(`${this.baseurl}/play/types`);
        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + this.#apiKey,
                'User-Agent': this.#ua,
            },
        });
        const json = await response.json();
        return json;
    }
    async stats(options) {
        const parsed = await playStatSchema.parseAsync(options);
        const url = new URL(`${this.baseurl}/play/stats`);
        for (const [key, value] of Object.entries(parsed)) {
            url.searchParams.append(key, value.toString());
        }
        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + this.#apiKey,
                'User-Agent': this.#ua,
            },
        });
        const json = await response.json();
        return json;
    }
    async statTypes() {
        const url = new URL(`${this.baseurl}/play/stat/types`);
        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + this.#apiKey,
                'User-Agent': this.#ua,
            },
        });
        const json = await response.json();
        return json;
    }
}
//# sourceMappingURL=plays.js.map
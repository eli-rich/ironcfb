import { driveSchema } from './schemas.js';
export default class Drives {
    #apiKey;
    #ua;
    baseUrl = 'https://api.collegefootballdata.com';
    constructor(apiKey, ua) {
        this.#apiKey = apiKey;
        this.#ua = ua;
    }
    async get(options) {
        const parsed = await driveSchema.parseAsync(options);
        const url = new URL(`${this.baseUrl}/drives`);
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
}
//# sourceMappingURL=drives.js.map
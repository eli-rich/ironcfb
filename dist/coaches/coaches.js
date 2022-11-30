export default class Coaches {
    #apiKey;
    #ua;
    baseurl = 'https://api.collegefootballdata.com';
    constructor(apiKey, ua) {
        this.#apiKey = apiKey;
        this.#ua = ua;
    }
    async get(options) {
        const url = new URL(`${this.baseurl}/coaches`);
        for (const [key, value] of Object.entries(options)) {
            if (value) {
                url.searchParams.append(key, value.toString());
            }
        }
        const response = await fetch(url.toString(), {
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
//# sourceMappingURL=coaches.js.map
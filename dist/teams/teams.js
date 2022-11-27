export default class Teams {
    #apiKey;
    #ua;
    baseurl = 'https://api.collegefootballdata.com';
    constructor(apiKey, ua) {
        this.#apiKey = apiKey;
        this.#ua = ua;
    }
    async get(options) {
        const url = new URL(`${this.baseurl}/teams`);
        for (const [key, value] of Object.entries(options)) {
            url.searchParams.append(key, value);
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
//# sourceMappingURL=teams.js.map
const contentAPIKey = "95e3de5f21cea00b9f0695a628";
const contentURL = "https://dev.kerneltools.com";

class GhostAPI {
    constructor(url, key) {
        this.url = `${url}/ghost/api/v3/content/`;
        this.key = key;
    }

    _getPostsURL(country, page = 1, limit = 10) {
        return `${this.url}posts/?key=${this.key}&tags&page=${page}&limit=${limit}&include=tags,authors&filter=tag:%20${country}`;
    }

    async getPosts(country="ph", page = 1, limit = 10) {
        const url = this._getPostsURL(country, page, limit);
        return await $fetch(url);
    }
    async getPost(id) {

    }
}

const api = new GhostAPI(contentURL, contentAPIKey);

export const useGhost = () => {
    return {
        getPosts: async (country, page = 1, limit = 10) => {
            return await api.getPosts(country, page, limit);
        }
    }
}

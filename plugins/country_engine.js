import CountryConfig from "./countries_config.json";

class CountryEngine {
    constructor() {
        this.loadCountryConfig();
    }
    static ip_info = null
    static ip = ''
    static countries = ['Georgia', 'Philippines', 'India']
    async getCountry(chosenCountry= null){
        // if(!chosenCountry) chosenCountry = window.localStorage.getItem('country'); //TODO implement country persisitence in cookies
        let country = chosenCountry || (await this.getIPInfo(await this.getIP())).country;
        if(CountryEngine.countries.indexOf(country) !== -1) this.country = country;
        else this.country = 'Default'
        // window.localStorage.setItem('country', this.country);
        this.loadCountryConfig();
    }

    loadCountryConfig() {
        // this.country = window.localStorage.getItem('country');
        this.engine = CountryConfig[this.country || "Default"]
    }

    async getIP() {
        try {
            if (CountryEngine.ip === "") {
                const response = await fetch("https://api.ipify.org");
                CountryEngine.ip = await response.text();
            }
            if (CountryEngine.ip !== "") return CountryEngine.ip;
            return "";
        } catch (e) {
            console.error("IP detection error: ", e);
            return "";
        }
    }

    async getIPInfo(ip) {
        try {
            if (CountryEngine.ip_info === null) {
                const response = await fetch("https://kernel.tools/api/ip-info/" + ip);
                CountryEngine.ip_info = await response.json()
            }
            if (CountryEngine.ip_info) return CountryEngine.ip_info;
            return { country: "Default", currency: "USD", city: "" };
        } catch (e) {
            console.error("Country detection error: ", e);
            return { country: "Default", currency: "USD", city: "" };
        }
    }
}

import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin((/* nuxtApp */) => {
    return {
        provide: {
            ce: new CountryEngine()
        }
    }
})

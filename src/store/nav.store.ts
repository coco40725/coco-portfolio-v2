import {defineStore} from "pinia";

export const useNavStore = defineStore("createNavStore", {
    state: () => ({
        allNav: ["home", "project", "experience"],
        currentNav: "home"
    }),
    getters: {
        getCurrentNav: (state) => state.currentNav
    },
    actions: {
        setCurrentNav(nav: string) {
            if (this.allNav.includes(nav)) {
                this.currentNav = nav
            }
        }
    }
})
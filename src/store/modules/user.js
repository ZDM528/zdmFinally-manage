
import { login } from "@/api/user.js";

const user = {
    namespaced: true,
    state: {
        username: '',
        password: ''
    },
    mutations: {
        initUser(state, {username,password}) {
            state.username = username;
            state.password = password;
        }
    },
    actions: {
        login: async (context, data) => {
            const res = await login(data);
            if (res.code === 200) {
                context.commit("initUser", data)
            }
            return res
        }
    },
    modules: {

    }

}

export default user;
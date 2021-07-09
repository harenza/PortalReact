import * as axios from "axios";



const instance = axios.create ({
    withCredential: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "74c1791a-8890-4f8e-8da9-d5c69c629d19"
      }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}


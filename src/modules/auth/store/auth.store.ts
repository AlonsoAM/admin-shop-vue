import {defineStore} from 'pinia'
import {computed, ref} from "vue";
import {AuthStatusEnum, type User} from "@/modules/auth/interfaces";
import {loginAction} from "@/modules/auth/actions";

export const useAuthStore = defineStore('auth', () => {

    // Properties
    // Authenticated, unAuthenticated, Checking - Los 3 estados de autenticacion
    const user = ref<User | undefined>()
    const token = ref<string>('')
    const authStatus = ref<AuthStatusEnum>(AuthStatusEnum.Checking)

    // Methods
    const login = async (email: string, password: string) => {
        try {
            const loginResp = await loginAction(email, password)

            if (!loginResp.ok) return false

            user.value = loginResp.user
            token.value = loginResp.token
            authStatus.value = AuthStatusEnum.Authenticated
            return true
        } catch (error) {
            console.log({error})
            return logout()
        }
    }

    const logout = () => {
        authStatus.value = AuthStatusEnum.UnAuthenticated
        user.value = undefined
        token.value = ''
        return false
    }

    return {
        user,
        token,
        authStatus,

        // Getters
        isChecking: computed(() => authStatus.value === AuthStatusEnum.Checking),
        isAuthenticated: computed(() => authStatus.value === AuthStatusEnum.Authenticated),
        username: computed(() => user.value?.fullName),
        // TODO: getter para saber si es admin o no

        // Actions
        login,
    }
})

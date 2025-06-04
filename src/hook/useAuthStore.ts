import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { z } from 'zod'

const userSchema = z.object({
  email: z.string().email(),
  avatar: z.string().url().optional(),
})

type User = z.infer<typeof userSchema>

interface AuthState {
  user: User | null
  setUser: (user: User | null) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => {
        try {
          if (user) {
            userSchema.parse(user)
          }
          set({ user })
        } catch (error) {
          console.error('Invalid user data:', error)
        }
      },
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
)
declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_URI: string
    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string
    PRIVATE_KEY: string
    NEXT_PUBLIC_PUBLIC_KEY: string
  }
}

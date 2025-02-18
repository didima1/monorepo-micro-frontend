/// <reference types="node" />

declare namespace NodeJS {
   interface ProcessEnv {
      NODE_ENV: 'production' | 'development'
      TEST: string
   }
}

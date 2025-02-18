import { RuleSetRule } from 'webpack'

export type BuildModeTypes = 'development' | 'production'
export type PlatformTypes = 'desktop' | 'mobile'
export type RuleType = RuleSetRule

export type EnvTypes = {
   port?: number
   analyzer?: boolean
   mode?: BuildModeTypes
   platform?: PlatformTypes
   SHOP_REMOTE_URL?: string
   ADMIN_REMOTE_URL?: string
}

export interface BuildPaths {
   entry: string
   html: string
   output: string
   public: string
}

export interface BuildOptions {
   port: number
   paths: BuildPaths
   platform: PlatformTypes
   mode: BuildModeTypes
   isDev: boolean
   isProd: boolean
   analyzer?: boolean
}

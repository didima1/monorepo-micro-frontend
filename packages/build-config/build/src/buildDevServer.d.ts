import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';
export declare const buildDevServer: (options: BuildOptions) => DevServerConfiguration;

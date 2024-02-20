export type ENV = 'dev' | 'uat' | 'prod';

export interface AppSliceStateProps {
    token: string | undefined,
    isAuthenticated: boolean
}
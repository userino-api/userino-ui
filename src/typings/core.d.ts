/** ********   accountLocalModel.ts    ********* */
interface AccountLocal {
  id: string
  email: string
  account_id: string
  password: string
  is_verified: boolean
  created_at: string
}
/** ********   accountModel.ts    ********* */
export interface Account {
  id: string
  project_id: string
  email?: string | null
  phone_number?: string | null
  is_phone_verified?: boolean
  created_at: string | Date
}
/** ********   appAuthModel.ts    ********* */
export interface AppAuthProvider {
  key: string
  project_id: string
  is_enabled: boolean
  created_at: string | Date
}
/** ********   appModel.ts    ********* */
export interface App {
  id: string
  project_id: string
  name: string
  is_primary: boolean
  created_at: string | Date
}
/** ********   appUserModel.ts    ********* */
export interface AppUser {
  account_id: string
  id: string
  app_id: string
  created_at: string
}
export interface UserFull extends User, AppUser {}
export type UserAccountCreatePayload = Pick<AppUser, 'account_id' | 'app_id'>
/** ********   emailActionModel.ts    ********* */
interface EmailAction {
  user_id: string
  email: string
  action: 'email/verify' | 'email/reset-password'
  code: string
  metadata?: Record<string, any>
  is_done: boolean
  expired_at: string
  created_at: string
}
/** ********   projectAdminModel.ts    ********* */
export interface ProjectAdmin {
  project_id: string
  admin_id: string
  created_at: string | Date
}
/** ********   projectModel.ts    ********* */
export interface Project {
  id: string
  name: string
  created_at: string | Date
}
/** ********   tokensModel.ts    ********* */
export interface Token {
  token: string
  user_id: string
  device_type?: 'web' | 'ios' | 'android' | null
  device_id?: string | null
  session?: Record<string, any>
  ip: string
}
/** ********   userContactsModel.ts    ********* */
export interface AccountContacts {
  account_id: string
  email?: string | null
  is_email_verified: boolean
  phone_number?: string | null
}
/** ********   userLocalizationModel.ts    ********* */
export interface UserLocalization {
  user_id: string
  time_zone: string
  country_iso2: string
  country_iso3: string
  language: string
  languages: string[]
  created_at: string
  updated_at: string
}
/** ********   usersModel.ts    ********* */
export interface User {
  id: string
  avatar_url?: string | null
  name?: string | null
  first_name?: string | null
  last_name?: string | null
  type?: 'user' | 'organisation'
  username?: string | null
  created_at: string
}


/**********   appAccessModel.ts    **********/
export interface AppAccess {
  id: string;
  app_id: string;
  name: string;
  is_enabled: boolean;
  public_key: string;
  expired_at?: string;
  created_at: string;
}
/**********   appClientsModel.ts    **********/
export interface AppClient {
  id: string;
  app_id: string;
  name: string;
  secret: string;
  active_at: string;
  expired_at?: string | null;
  created_at: string;
}
/**********   appKeyModel.ts    **********/
export interface AppKey {
  app_id: string;
  key: string;
}
/**********   appModel.ts    **********/
export interface App {
  id: string;
  name: string;
  created_at: string | Date;
}

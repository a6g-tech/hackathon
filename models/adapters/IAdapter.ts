export interface IProfile {
  adapterType: string;
  id: any;
  name?: string | null | undefined;
}

export interface IAdapter {
  type: string;
  getProfilesOwnedBy: (addresses: string[]) => Promise<IProfile[]>;
}

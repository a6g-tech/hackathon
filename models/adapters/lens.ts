import { IAdapter } from "./IAdapter";
import lensApi from "../../api/lens";

export const ADAPTER_TYPE = "lens";

export default {
  type: ADAPTER_TYPE,
  getProfilesOwnedBy(addresses) {
    return new Promise((res, rej) =>
      lensApi
        .getProfiles({ ownedBy: addresses })
        .then(({ items }) =>
          res(
            items.map((profile) => ({ adapterType: ADAPTER_TYPE, ...profile }))
          )
        )
        .catch(rej)
    );
  },
} as IAdapter;

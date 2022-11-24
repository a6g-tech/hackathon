import React, { useEffect, useState } from "react";
import { IAdapter, IProfile } from "./adapters/IAdapter";
import lensAdapter from "./adapters/lens";
import { Address } from "@wagmi/core/dist/declarations/src/types";

export const profileTypeToAdapterMap = {
  [lensAdapter.type]: lensAdapter,
  //   [ProfileType.cc]: CCApi,
};

export interface IProps {
  address: string | undefined;
  enabled?: boolean;
  activeAdapterTypes?: IAdapter["type"][];
}

export const useProfiles = (props: IProps) => {
  const [profiles, setProfiles] = useState<IProfile[]>([]);

  const refetch = () => {
    props.activeAdapterTypes!.map((activeProfileType) =>
      profileTypeToAdapterMap[activeProfileType].getProfilesOwnedBy([
        props.address!,
      ])
    );
  };

  useEffect(() => {
    props.enabled && props.address && refetch;
  }, [props.enabled, props.address]);

  return {
    refetch,
    profiles,
  };
};

useProfiles.defaultProps = {
  enabled: true,
  activeAdapterTypes: [lensAdapter.type],
} as IProps;

export default useProfiles;

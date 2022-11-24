import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { chain, useAccount, useConnect, useEnsAvatar, useEnsName } from "wagmi";
import useProfiles from "../../models/profiles";

export const ProfileCard = () => {
  const searchParams = useSearchParams();
  const { address, isConnecting: isConnectingAccount } = useAccount();
  const profileCardAddress = searchParams.get("address") || address;
  const { data: ensName, isLoading: isLoadingEnsName } = useEnsName({
    chainId: chain.mainnet.id,
    address: profileCardAddress,
  });
  const { data: ensAvatar, isLoading: isLoadingEnsAvatar } = useEnsAvatar({
    chainId: chain.mainnet.id,
    addressOrName: profileCardAddress,
  });
  const { profiles } = useProfiles({ address: profileCardAddress });

  useEffect(() => {}, []);

  return <></>;
};

export default ProfileCard;

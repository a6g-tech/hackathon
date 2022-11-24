import { apolloClientFactory } from "./apolloClientFactory";
import { type ProfileQueryRequest, ProfilesDocument } from "./lens/generated";

export const API_URL = "https://api.lens.dev/";

const apolloClient = apolloClientFactory({ apiUrl: API_URL });

const query = `
  query {
    ping
  }
`;

export const getProfiles = async (request: ProfileQueryRequest) => {
  const result = await apolloClient.query({
    query: ProfilesDocument,
    variables: {
      request,
    },
  });

  return result.data.profiles;
};

export default {
  getProfiles,
};

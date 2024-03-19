import { ContentfulResponse } from "@/types/contentful.type";
import { appConfig } from "@/utils/config";

const { accessToken, baseUrl, environmentId, spaceId } = appConfig;
export const getEntries = async (): Promise<ContentfulResponse> => {
  const res = await fetch(
    baseUrl +
      `/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`,
    { next: { revalidate: 10 } },
  );
  return res.json();
};

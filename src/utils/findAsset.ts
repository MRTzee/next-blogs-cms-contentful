import { Asset } from "@/types/contentful.type";

export const findAsset = (id: string, assets: Asset[]) => {
  return assets.find((asset) => asset.sys.id === id);
};

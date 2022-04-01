import { URL } from "url";

export type Data = {
  center: string;
  date_created: string;
  description: string;
  description_508: string;
  keywords: string[];
  media_type: string;
  nasa_id: string;
  secondary_creator: string;
  title: string;
};

export type ItemLink = {
  href: URL;
  rel: string;
  render: string;
};

export type Item = {
  data: Data[];
  links: ItemLink;
  href: URL;
};

export type ResponseLink = {
  href: URL;
  prompt: string;
  rel: string;
};

export type Response = {
  collection: {
    href: URL;
    items: Item[];
    links: ResponseLink[];
    metadata: {
      total_hits: number;
    };
    version: string;
  };
};

export type Result<T, E = Error> =
  | { ok: true; data: T }
  | { ok: false; error: E };

import { ElementType } from "react";

export interface ISocialLink {
  id: number;
  icon: ElementType;
  url: string;
  label: string;
}

export interface IChatHistory {
  id: number;
  title: string;
  creator_wallet_address: string;
  created_at: string;
  updated_at: string;
}

export interface IChatHistoriesByDates {
  [key: string]: Array<IChatHistory>;
}

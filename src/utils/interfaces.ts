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
  messages: string;
  creator_wallet_address: string;
  createdAt: string;
  updatedAt: string;
  created_date: string;
  updated_date: string;
}

export interface IChatHistoriesByDates {
  [key: string]: Array<IChatHistory>;
}

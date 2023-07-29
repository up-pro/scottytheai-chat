import { InsertChart, Telegram, Twitter } from "@mui/icons-material";
import { ISocialLink } from "./interfaces";

export const SOCIAL_LINKS: Array<ISocialLink> = [
  {
    id: 1,
    label: "Telegram",
    icon: Telegram,
    url: "#"
  },
  {
    id: 2,
    label: "Twitter",
    icon: Twitter,
    url: "#"
  },
  {
    id: 3,
    label: "Scotty Chart",
    icon: InsertChart,
    url: "#"
  }
];

export const CONTRACT_ADDRESS = "0x73ab0d67d74517e0bc9d406d06a744aaa097f96e";

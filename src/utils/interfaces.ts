import { ElementType } from "react";
import { TMember } from "./types";

export interface ISocialLink {
  id: number;
  icon: ElementType;
  url: string;
  label: string;
}

export interface IChat {
  role: TMember;
  content: string;
}

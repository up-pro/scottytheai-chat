import { IChatHistoriesByDates, IChatHistory } from "./interfaces";

export const isChatHistory = (obj: unknown): obj is IChatHistory => {
  if (typeof obj === "object" && obj !== null) {
    const chatHistoryObject = obj as Partial<IChatHistory>;
    return (
      typeof chatHistoryObject.id === "number" &&
      typeof chatHistoryObject.title === "string" &&
      typeof chatHistoryObject.messages === "string" &&
      typeof chatHistoryObject.creator_wallet_address === "string" &&
      typeof chatHistoryObject.createdAt === "string" &&
      typeof chatHistoryObject.updatedAt === "string" &&
      typeof chatHistoryObject.created_date === "string" &&
      typeof chatHistoryObject.updated_date === "string"
    );
  } else {
    return false;
  }
};

export const isChatHistoriesByDates = (
  obj: unknown
): obj is IChatHistoriesByDates => {
  if (typeof obj === "object" && obj !== null) {
    const chatHistoriesObj = obj as Partial<IChatHistoriesByDates>;

    for (const key in chatHistoriesObj) {
      const historyArray = chatHistoriesObj[key];

      if (!Array.isArray(historyArray) || !historyArray.every(isChatHistory)) {
        return false;
      }
    }
    return true;
  }
  return false;
};

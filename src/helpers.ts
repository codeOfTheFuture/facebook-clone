import { DocumentData } from "firebase/firestore";

export const filterReactionsByType = (
  reactions: DocumentData[],
  reactionType: string
): DocumentData[] =>
  reactions.filter(reaction => reaction.data().reactionType === reactionType);

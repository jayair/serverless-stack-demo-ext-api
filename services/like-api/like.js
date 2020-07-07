import { success } from "../../libs/response-lib";

export const main = handler(async (event, context) => {
  // business logic code for liking a post

  return success({ status: true });
});

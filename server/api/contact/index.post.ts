import { ResponseBody } from "@/types/ResponseBody";
import { Contact } from "@/types/Contact";

export default defineEventHandler<ResponseBody<Contact>>(async (event) => {
  const body = await readBody(event);

  body.id = "xxxx-xxxx-xxxx-xxxx";

  return body;
});

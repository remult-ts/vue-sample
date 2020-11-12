import { Context, CookieBasedJwt } from "@remult/core";
export const context = new Context();
export const authorization = new CookieBasedJwt(context);
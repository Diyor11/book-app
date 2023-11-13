import { Md5 } from "ts-md5";

export const keySignGenerator = (user, url, body) => {
  if (!user) return {};
  return {
    Key: user.key,
    Sign: Md5.hashStr(`${url}${body ? JSON.stringify(body) : ""}${user.secret}`),
  };
};

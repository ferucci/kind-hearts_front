const checkResponse = (res: any) => {
  if (res.ok || res.created) {
    return res.json();
  }
  return res.json().then((err: Error) => {
    return Promise.reject(err);
  });
};

const headersWithContentType = { "Content-Type": "application/json" };

export const getHeroContent = async (urlAPI: string) => {
  const res = await fetch(URL + urlAPI, {
    method: "GET",
    headers: headersWithContentType,
  });
  return checkResponse(res);
};
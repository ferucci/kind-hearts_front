const headersWithContentType = { "Content-Type": "application/json" };

const checkResponse = (res: any) => {
  if (res.ok || res.created) {
    return res.json();
  }
  return res.json().then((err: Error) => {
    return Promise.reject(err);
  });
};

export const getResponse = async (url: string) => {

  const res = await fetch(url, {
    method: "GET",
    headers: headersWithContentType,
  });

  return checkResponse(res);
};
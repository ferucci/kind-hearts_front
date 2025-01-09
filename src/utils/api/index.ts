interface ResponseData<T> {
  data: T | null;
}

// Тип данных, возвращаемый функцией getResponse
export type GetResponseResult<T> = ResponseData<T> | null;

const checkResponse = async (res: Response) => {
  console.log(res)
  if (res.ok || res.status === 201) {
    return res.json();
  }
  const err = await res.json();
  return await Promise.reject(err);
};

export const getResponse = async <T>(url: string): Promise<GetResponseResult<T>> => {
  console.log(url)
  const res = await fetch(url, {
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    mode: 'cors'
  });

  const responseData = await checkResponse(res);

  return responseData as GetResponseResult<T>;
};
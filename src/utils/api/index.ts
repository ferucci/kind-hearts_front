interface ResponseData<T> {
  data: T | null;
}

// Тип данных, возвращаемый функцией getResponse
export type GetResponseResult<T> = ResponseData<T> | null;

const checkResponse = async (res: Response) => {
  if (res.ok || res.status === 201) {
    return res.json();
  }
  const err = await res.json();
  console.log('error: ', err);
  return await Promise.reject(err);
};

export const getResponse = async <T>(url: string): Promise<GetResponseResult<T>> => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
  });

  const responseData = await checkResponse(res);

  return responseData as GetResponseResult<T>;
};
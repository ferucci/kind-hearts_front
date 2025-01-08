import { D } from "@/common/interface";

interface ResponseData {
  data: D[];
}

// Тип данных, возвращаемый функцией getResponse
export type GetResponseResult = ResponseData | null;

const checkResponse = async (res: Response) => {
  console.log(res)
  if (res.ok || res.status === 201) {
    return res.json();
  }
  const err = await res.json();
  return await Promise.reject(err);
};

export const getResponse = async (url: string): Promise<GetResponseResult> => {
  console.log(url)
  const res = await fetch(url, {
    method: "GET",
    mode: 'cors',
  });

  const responseData = await checkResponse(res);

  return responseData as GetResponseResult;
};
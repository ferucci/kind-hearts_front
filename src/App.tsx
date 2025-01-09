import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useState, useEffect } from 'react';

import { HomePage, PrivacyPolicyPage } from '@/pages'
import { APP_ROUTES } from '@/utils'

import { mainResURL } from './utils/api/constants';
import { D } from '@/common/interface'
import { getResponse, GetResponseResult } from './utils/api';

export function App() {
  const [data, setData] = useState<D[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: GetResponseResult<D[]> = await getResponse<D[]>(mainResURL);

        setData(result?.data ?? []);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch', error);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loader"></div>

  return (
    <>
      <ToastContainer autoClose={50000} position={'bottom-right'} />
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage data={data} />} path={APP_ROUTES.home} />
          <Route element={<PrivacyPolicyPage data={data} />} path={APP_ROUTES.privacyPolicy} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

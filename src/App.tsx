import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useState, useEffect } from 'react';

import { HomePage, PrivacyPolicyPage } from '@/pages'
import { APP_ROUTES } from '@/utils'
import { VARS } from '@/utils';
import { D } from '@/common/interface'

const query = {
  index: '/api/indices?',

  hero: 'populate[hero][populate][images][populate]=*',
  advantages: 'populate[advantages][populate]=*',
  what_we_do: {
    index: 'populate[what_we_do][populate]=',
    cards: {
      image: 'cards.image',
      paragraph: 'cards.card_paragraph'
    },
    paragraph: 'paragraphs',
    tags: 'tags'
  },
  ways_to_help: 'populate[ways_to_help][populate][image][populate]=*',
  our_cases_title: 'populate[our_cases_title][populate]=*',
  our_cases_cards: 'populate[our_cases_cards][populate]=*',
  how_supported: 'populate[how_supported][populate]=*',
  questions: 'populate[questions][populate]=*',
  contacts: 'populate[contacts][populate]=*',
  form: 'populate[form][populate]=*',
  logo_images: 'populate[logo_images][populate]=*',
}

export function App() {

  const [data, setData] = useState<D[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${VARS.url}${query.index}${query.hero}&${query.questions}&${query.advantages}&${query.what_we_do.index}${query.what_we_do.cards.image}&${query.what_we_do.index}${query.what_we_do.cards.paragraph}&${query.what_we_do.index}${query.what_we_do.paragraph}&${query.what_we_do.index}${query.what_we_do.tags}&${query.ways_to_help}&&${query.our_cases_cards}&${query.how_supported}&${query.form}&${query.contacts}&${query.logo_images}`);

        const json: { data: D[] } = await res.json()

        setData(json.data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch indices', error);
      }
    }
    fetchData()
  }, []);

  if (loading) return <div className="loading">Loading...</div>

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

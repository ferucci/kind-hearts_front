import { apiUrl } from '@/utils'

const indexQuery = {
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

export const mainResURL = `${apiUrl}${indexQuery.index}${indexQuery.hero}&${indexQuery.questions}&${indexQuery.advantages}&${indexQuery.what_we_do.index}${indexQuery.what_we_do.cards.image}&${indexQuery.what_we_do.index}${indexQuery.what_we_do.cards.paragraph}&${indexQuery.what_we_do.index}${indexQuery.what_we_do.paragraph}&${indexQuery.what_we_do.index}${indexQuery.what_we_do.tags}&${indexQuery.ways_to_help}&&${indexQuery.our_cases_cards}&${indexQuery.how_supported}&${indexQuery.form}&${indexQuery.contacts}&${indexQuery.logo_images}`;

const policyQuery = {
  index: '/api/privacy-policies?',

  header: 'populate[header][populate]=*',
  contacts: 'populate[contacts][populate]=*',
  section: {
    list: 'populate[section][populate][inner_blocks][populate]=list',
    add_list: 'populate[section][populate][inner_blocks][populate]=add_list.list',
    description: 'populate[section][populate][inner_blocks][populate]=description',
    paragraphs: 'populate[section][populate][inner_blocks][populate]=paragraphs',
  }
}

export const policyURL = `${apiUrl}${policyQuery.index}${policyQuery.header}&${policyQuery.contacts}&${policyQuery.section.description}&${policyQuery.section.list}&${policyQuery.section.paragraphs}&${policyQuery.section.add_list}`

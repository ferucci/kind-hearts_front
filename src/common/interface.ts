
export interface D {
  id: number,
  name: string,
  logo_images: {
    id: number,
    main_image: {
      url: string
    },
    mobile_image: {
      url: string
    },
    alt_field: string
  }
  what_we_do: {
    title: string,
    paragraphs: [
      {
        id: number,
        text: string,
      }
    ]
    tags: [
      {
        id: number,
        tag: string
      }
    ],
    cards: [
      {
        title: string,
        button: string,
        linkTo: string,
        image: {
          url: string
        },
        alt_field: string,
        card_paragraph: [
          {
            id: number,
            text: string
          }
        ]
      }
    ]
  },
  hero: {
    button: string;
    title: string;
    subtitle: string;
    images: {
      id: number;
      main_image: {
        url: string
      }
      mobile_image: {
        url: string
      },
      alt_field: string
    }
  },
  advantages: {
    descriptions: [
      {
        id: number,
        text: string
      }
    ],
    item: []
  },
  ways_to_help: {
    description: string,
    title: string,
    image: {
      url: string
    },
    alt_field: string
  },
  our_cases_title: string,
  our_cases_cards: [
    {
      title: string,
      image: [
        {
          url: string
        }
      ],
      alt_field: string,
      period: {
        datetime: string
      }
    }
  ],
  how_supported: {
    title: string,
    how_supported_tags: [
      {
        id: number,
        number: number,
        text: string,
        title: string
      }
    ],
    paragraphs: [
      {
        id: number,
        text: string
      }
    ]
  },
  questions_title: string,
  questions: [
    {
      id: number,
      title: string,
      paragraphs: [
        {
          id: number,
          text: string
        }
      ],
      isEmail: boolean
    }
  ],
  form: {
    title: string,
    subtitle: string,
    fields: {
      name: string,
      email: string,
      description: string
    }
  },
  contacts: Contacts
}
export interface Contacts {
  title: string,
  address: [
    {
      title: string,
      text: string,
      backgroundColor: string,
      borderColor: string
    }
  ],
  phone: {
    href: number,
    label: string,
    title: string
  },
  email: {
    href: string,
    label: string,
    title: string
  },
  instagram: {
    href: string,
    label: string,
    title: string
  }
  map_link: string
}
export interface Header {
  title: string;
  content: Description[];
}
export interface Description {
  id: number;
  text: string;
}
export interface ListItem {
  id: number;
  item: string;
}
export interface AddList {
  id: number;
  list: Description[];
  title: string;
}
export interface BlockItem {
  add_list: AddList[];
  id: number;
  title: string;
  subtitle: string;
  list: ListItem[];
  description: Description[];
  paragraphs: Description[];
}
export interface SectionPolice {
  id: number;
  title: string;
  link_connection: string;
  inner_blocks: BlockItem[];
}
export interface DPolice {
  id: number;
  updatedAt: string;
  header: Header;
  link_connection: string;
  title: string;
  section: SectionPolice[];
  contacts: Contacts
}
export type Props = {
  isButton?: boolean
  slogan?: string
  title?: string,
  data: D[]
}
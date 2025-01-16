interface Contacts {
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
    phone: number,
    visual: string,
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
    }
  }
  what_we_do: {
    title: string,
    paragraphs: [
      {
        id: number,
        description: string,
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
        card_paragraph: [
          {
            id: number,
            description: string
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
      }
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
    }
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
      period: {
        date: string,
        datetime: string
      }
    }
  ],
  how_supported: {
    title: string,
    menuItem_title: string,
    advantages: [
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
        description: string
      }
    ]
  },
  questions_title: string,
  questions: [
    {
      id: number,
      title: string,
      content: string,
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
export interface Header {
  title: string;
  content: Description[];
}
export interface Description {
  id: number;
  description: string;
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
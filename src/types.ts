export interface CalloutItem {
  id?: string
  name: string
  title?: string
  subtitle?: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
  content: string[] | string
  imagePosition?: 'left' | 'right'
  style?: {
    scrollMarginTop?: string
  }
  links?: {
    text: string
    href: string
    target?: string
    rel?: string
  }[]
}

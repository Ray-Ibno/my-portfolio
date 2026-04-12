export type ProjectProps = {
  title: string
  description: string
  subDescription: string[]
  href: string
  image: string
  tags: {
    id: number
    name: string
    path: string
  }[]
}

export type ProjectDetailsProps = Pick<
  ProjectProps,
  'title' | 'description' | 'subDescription' | 'image' | 'tags' | 'href'
> & {
  closeModal: () => void
}

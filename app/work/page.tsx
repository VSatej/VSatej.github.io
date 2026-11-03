import { WorkPosts } from 'app/components/work'

export const metadata = {
  title: 'Work',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Work</h1>
      <WorkPosts />
    </section>
  )
}

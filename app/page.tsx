import { WorkPosts } from 'app/components/work'
import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'
export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>
      <p className="mb-4">
        {`I live in Grenoble, France and am seeking a six-month end-of-studies internship starting January 2027. CoDaS M2 student at Grenoble INP–Ensimag, specialising in Applied AI and Interactive Systems.`}
      </p>
        <Link
            key='cv'
            className="flex flex-col space-y-1 mb-4"
            href='https://drive.google.com/file/d/1LSdfEtXOlHIZov-o_553fdP3tkYQ88hi/view'
        >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    Download CV ↓
                </p>
            </div>
        </Link>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
            Work Experience
        </h1>
      <div className="my-8">
        <WorkPosts />
      </div>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
            Projects
        </h1>
        <div className="my-8">
            <BlogPosts />
        </div>

    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import headshot from '../img/headshot.jpg'

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="">
        <h1>Hi, I'm Dan Bednarczyk</h1>
        <p className="">
          I'm a web developer and multimedia artist based in Pittsburgh, PA
        </p>
        <Link href='/resume' className='inline-flex py-2 px-4 mb-4 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800'>Professional Resume</Link>
      </div>

      <div className="">
        <Image
          className="rounded"
          src={headshot}
          alt="Headshot"
          width={180}
          priority
        />
      </div>
    </main>
  )
}

import Image from 'next/image'
import headshot from '../img/headshot.jpg'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="">
        <h1>Hi, I'm Dan Bednarczyk</h1>
        <p className="">
          I'm a web developer and multimedia artist based in Pittsburgh, PA
        </p>
        <Link href='/resume'>Professional Resume</Link>
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

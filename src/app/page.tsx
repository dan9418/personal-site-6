import PageFrame from '@/components/PageFrame'
import PageHeader from '@/components/PageHeader'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import headshot from '../img/headshot.jpg'

const Row: React.FC<{ imgSrc: StaticImageData, imgAlt: string, text: string, flip?: boolean, linkHref: string, linkText: string, title: string }> =
  ({ imgSrc, imgAlt, text, flip, linkHref, linkText, title }) => {
    const paragraph = (
      <div className='col-span-3'>
        <p className="">
          {text}
        </p>
        <Link href={linkHref} className='flex justify-center py-2 px-4 m-4 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800'>{linkText}</Link>
      </div>
    );
    return (
      <div className="mt-4">
        <h2 className={`text-2xl font-bold pb-2 mb-4 border-b border-black ${flip && 'text-right'}`}>{title}</h2>
        <div className="grid grid-cols-4 gap-4">
          {flip && paragraph}
          <div className="flex flex-col gap-4">
            <Image
              className="rounded"
              src={imgSrc}
              alt={imgAlt}
              width={180}
              priority
            />
          </div>
          {!flip && paragraph}
        </div>
      </div>
    );
  };

export default function Home() {
  return (
    <PageFrame>
      <div className="">
        <PageHeader text="Hi, I'm Dan Bednarczyk" />
        <div className="block p-4 m-6 bg-slate-200 border border-gray-200 rounded-lg shadow">
          <p className="font-normal text-gray-700">
            I'm a web developer and multimedia artist based in Pittsburgh, PA. I have the communication skills and domain knowledge needed to facilitate effective conversations between stakeholders in tech, product, design, and beyond.
          </p>
        </div>

        <Row title='Web Developer' linkHref='/resume' linkText='Professional Resume' imgAlt='Headshot' imgSrc={headshot} text="I have over 8 years of professional software engineering experience delivering first-class solutions to some of the largest technology companies in the country. I have built websites designed to handle traffic from over X million users a day and METRIC. My work includes integrations for ads, tracking, SEO optimization, device responsivity, edge-caching, accessibility, and URL-rewriting schemes." />
        <Row title='Multimedia Artist' linkHref='/portfolio' linkText='Creative Portfolio' imgAlt='Headshot' imgSrc={headshot} text="As a creative artist, I currently use the moniker Strange Frontiers, but I have nearly two decades of experience in the creative arts. I am a multi-disciplinary musician, including performance, songwriting, audio engineering, mixing, and education. As a visual artist, I have applied my graphic design skills to dozens of projects for album covers, posters, websites, logos, t-shirts, and tattoos. I also work with physical media and I have an extensive portfolio spanning many different formats." flip />
      </div>
    </PageFrame>
  )
}

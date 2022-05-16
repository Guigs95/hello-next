import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import Subscribe from '../components/Subscribe';
import ExperienceCard from '../components/ExperienceCard';

export default function Home({ videos }) {
  return (
	<Container>
	  <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
		<div className="flex flex-col-reverse sm:flex-row items-start">
		  <div className="flex flex-col pr-8">
			<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
			  Guillaume Dominici
			</h1>
			<h2 className="text-gray-700 dark:text-gray-200 mb-4">
			  Développeur Concepteur Web et Architecte Data
			</h2>
			<p className="text-gray-600 dark:text-gray-400 mb-16">
			  23 ans. Futur diplomé d'un Mastère en Architecture Web et Big Data à Paris.
			</p>
		  </div>
		  <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
			<Image
			  alt="Guillaume Dominici"
			  height={176}
			  width={176}
			  src="/avatar.jpg"
			  className="rounded-full filter grayscale"
			/>
		  </div>
		</div>
		<h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
		  Profil
		</h3>
		<div className="flex gap-6 flex-col md:flex-row w-42rem">
		  <BlogPostCard
			title="Frameworks"
			slug="rust"
			gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
			lines={[
			  'Symfony 5',
			  'React JS',
			  'Codeigniter 4',
			]}
		  />
		  <BlogPostCard
			title="Techs"
			slug="style-guides-component-libraries-design-systems"
			gradient="from-[#D8B4FE] to-[#818CF8]"
			lines={[
			  'Docker',
			  'MySQL',
			  'API Rest',
			]}
		  />
		  <BlogPostCard
			title="Outils"
			slug="react-state-management"
			gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
			lines={[
			  'Slack',
			  'VS Code',
			  'Deezer',
			]}
		  />
		</div>
		<Link href="#">
		  <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
			Voir plus
			<svg
			  xmlns="http://www.w3.org/2000/svg"
			  fill="none"
			  viewBox="0 0 24 24"
			  className="h-6 w-6 ml-1"
			>
			  <path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
			  />
			</svg>
		  </a>
		</Link>
		<h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
		  Expérience Professionnelle
		</h3>
		<p className="text-gray-600 dark:text-gray-400 mb-4">
		  En plus de 3 ans d'expérience, j'ai pu acquérir un certaine autonomie et un sens proactif du travail
		  m'ayant permis de postuler au poste de Lead Développeur en 2021-2022.
		</p>
		<ExperienceCard
		  index="2021-2022"
		  href="https://www.youtube.com/watch?v=MxR5I5_hOKk&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=2"
		  length="WebexpR"
		  title="Lead Développeur Junior - Alternance"
		/>
		<ExperienceCard
		  index="2019-2021"
		  href="https://www.youtube.com/watch?v=AGl52moyISU&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=3"
		  length="WebexpR"
		  title="Développeur / Concepteur Web - Alternance"
		/>
		<ExperienceCard
		  index="Juillet 2018"
		  href="https://www.youtube.com/watch?v=3g6-v3_BNbM&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=4"
		  length="Oxylead"
		  title="Développeur Web - Stage"
		/>
	  </div>
	</Container>
  );
}

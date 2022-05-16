import Link from 'next/link';
import ExperienceCard from '../components/ExperienceCard';
import Container from '../components/Container';
import TopTracks from '../components/TopTracks';

export default function Formations() {
  return (
    <Container
      title="Formations – Guillaume Dominici"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Formations
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Fort de 5 années d'apprentissage dans le domaine du développement web et Big Data. 
            <br></br>
            Je m'appuis aujourd'hui sur des formations connues et reconnues. 
          </p>
        </div>
        <ExperienceCard
          index="2020-2022"
          href="https://www.youtube.com/watch?v=MxR5I5_hOKk&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=2"
          length="IPSSI"
          title="Mastère en architecture Web et Big Data"
        />
        <ExperienceCard
          index="2019-2020"
          href="https://www.youtube.com/watch?v=MxR5I5_hOKk&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=2"
          length="CNAM"
          title="Licence Informatique Générale"
        />
        <ExperienceCard
          index="2017-2020"
          href="https://www.youtube.com/watch?v=MxR5I5_hOKk&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=2"
          length="Saint-Vincent"
          title="BTS SIO option SLAM"
        />q
      </div>
    </Container>
  );
}

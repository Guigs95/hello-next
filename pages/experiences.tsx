import { useState } from 'react';

import Container from '../components/Container';
import ExperiencePost from '../components/ExperiencePost';
import { pick } from 'lib/utils';

export default function Blog({
  posts
}) {

  return (
	<Container
	  title="Expériences – Guillaume Dominici"
	  description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
	>
	  <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
		<h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
		  Expériences Professionnelle
		</h1>
		<p className="mb-4 text-gray-600 dark:text-gray-400">
		  Depuis près de 3 ans je travaille activement de le domaine du développement web. Ces 3 années d'alternance m'ont permis d'acquérir de l'autonomie et un sens proactif du travail.
		  <br></br>
		  C'est pourquoi, suite à un remaniement managérial, j'ai eu l'occasion de découvrir le role de Lead Développeur.
		</p>
		<br></br>
		  <>
			<ExperiencePost
			  title="WebexpR - Les nouvelles responsabilités"
			  year="2021-2022"
			  summary="Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?"
			  slug="rust"
			/>
			<ExperiencePost
			  title="WebexpR - 2 ans d'apprentissage"
			  year="2019-2021"
			  summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
			  slug="style-guides-component-libraries-design-systems"
			/>
			<ExperiencePost
			  title="WebexpR - Première expérience"
			  year="Début 2019"
			  summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
			  slug="monorepo-lerna-yarn-workspaces"
			/>
			<ExperiencePost
			  title="Oxylead - La découverte"
			  year="Eté 2018"
			  summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
			  slug="monorepo-lerna-yarn-workspaces"
			/>
		  </>
	  </div>
	</Container>
  );
}

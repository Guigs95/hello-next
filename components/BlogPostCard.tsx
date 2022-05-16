import Link from 'next/link';
import useSWR from 'swr';
import cn from 'classnames';

import { Views } from '../lib/types';

export default function BlogPostCard({ title, slug, gradient, lines = [] }) {

  return (
	<Link href={`/blog/${slug}`}>
	  <a
		className={cn(
		  'transform hover:scale-[1.01] transition-all',
		  'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
		  gradient
		)}
	  >
		<div className="flex flex-col w-full justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
		  <div className="flex flex-col justify-between">
			<h4 className="text-lg md:text-lg font-medium mb-3 sm:mb-4 w-full text-gray-900 dark:text-gray-100 tracking-tight">
			  {title}
			</h4>
		  </div>
		  <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
			<ul className="text-gray-600 dark:text-gray-400">
			  {lines.map((value) => (
				<li key={value}>- {value}</li>
			  ))}
			</ul>
		  </div>
		</div>
	  </a>
	</Link>
  );
}

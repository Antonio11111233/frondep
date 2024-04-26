'use client'

import Loader from '@/components/ui/Loader'

import { useProfile } from '@/hooks/useProfile'

export function Statistics() {
	const { data, isLoading } = useProfile()

	return isLoading ? (
		<Loader />
	) : (
		<div className='grid gap-12 mt-7'>
			{data?.statistics.length ? (
				data.statistics.map(statistic => (
					<div
						className='bg-border rounded-1 p-layout text-center hover:-translate-y-3 transition-transform duration-500'
						key={statistic.label}
					>
						<div className='text-xl'>{statistic.label}</div>
						<div className='text-3xl font-semibold'>{statistic.value}</div>
					</div>
				))
			) : (
				<div>Statistics not loaded!</div>
			)}
		</div>
	)
}

// export function Statistics(){
//     return <div>Statistics</div>
// }
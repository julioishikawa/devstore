'use client'

import { Skeleton } from '@/components/skeleton'
import { Suspense } from 'react'
import { CurrentSearch } from './current-search'

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[379px]" />
        <Skeleton className="h-[379px]" />
        <Skeleton className="h-[379px]" />
        <Skeleton className="h-[379px]" />
        <Skeleton className="h-[379px]" />
        <Skeleton className="h-[379px]" />
      </div>
    </div>
  )
}

// 'use client'

// import { Skeleton } from '@/components/skeleton'
// import { useSearchParams } from 'next/navigation'
// import { Suspense } from 'react'

// function SearchResults() {
//   const searchParams = useSearchParams()
//   const query = searchParams.get('q')

//   return (
//     <div className="flex flex-col gap-4">
//       <p className="text-sm">
//         Resultados para <span className="font-semibold">{query}</span>
//       </p>
//       <div className="grid grid-cols-3 gap-6">
//         <Skeleton className="h-[379px]" />
//         <Skeleton className="h-[379px]" />
//         <Skeleton className="h-[379px]" />
//         <Skeleton className="h-[379px]" />
//         <Skeleton className="h-[379px]" />
//         <Skeleton className="h-[379px]" />
//       </div>
//     </div>
//   )
// }

// export default function SearchLoading() {
//   return (
//     <Suspense fallback={null}>
//       <SearchResults />
//     </Suspense>
//   )
// }

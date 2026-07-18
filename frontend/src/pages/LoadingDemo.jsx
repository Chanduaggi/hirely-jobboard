import { SkeletonJobCard, SkeletonProfile } from '../components/Skeletons'

export default function LoadingDemo() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold">Loading States</h1>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Skeleton placeholders shown while content loads.</p>

      <h2 className="mt-8 mb-4 text-sm font-semibold uppercase text-slate-400">Job Cards</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => <SkeletonJobCard key={i} />)}
      </div>

      <h2 className="mt-10 mb-4 text-sm font-semibold uppercase text-slate-400">Profile</h2>
      <SkeletonProfile />
    </div>
  )
}

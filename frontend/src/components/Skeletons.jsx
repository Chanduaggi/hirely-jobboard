export function SkeletonJobCard() {
  return (
    <div className="card space-y-4 p-5">
      <div className="flex items-center gap-3">
        <div className="skeleton h-12 w-12" />
        <div className="flex-1 space-y-2">
          <div className="skeleton h-4 w-2/3" />
          <div className="skeleton h-3 w-1/3" />
        </div>
      </div>
      <div className="skeleton h-3 w-full" />
      <div className="skeleton h-3 w-4/5" />
      <div className="flex justify-between pt-2">
        <div className="skeleton h-4 w-16" />
        <div className="skeleton h-8 w-24 rounded-xl" />
      </div>
    </div>
  )
}

export function SkeletonProfile() {
  return (
    <div className="card mx-auto max-w-lg space-y-4 p-8">
      <div className="mx-auto skeleton h-24 w-24 rounded-full" />
      <div className="mx-auto skeleton h-4 w-1/2" />
      <div className="mx-auto skeleton h-3 w-1/3" />
      <div className="mt-6 skeleton h-10 w-full rounded-xl" />
      <div className="skeleton h-10 w-full rounded-xl" />
    </div>
  )
}

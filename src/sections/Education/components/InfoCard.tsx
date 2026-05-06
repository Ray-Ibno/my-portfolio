import type { InfoCardProps } from '../../../types'

const InfoCard = ({ educationInfo }: InfoCardProps) => {
  return (
    <div className="flex flex-col mb-5 pl-5">
      <div>
        <h1 className="mb-px font-bold text-xl">{educationInfo.title}</h1>
        <p className="text-xs text-neutral-500">{educationInfo.year}</p>
        <p className="mt-3 font-extralight text-neutral-300">{educationInfo.description}</p>
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex gap-3">
          {educationInfo.achievements.map((achievment) => (
            <achievment.icon key={achievment.title} />
          ))}
        </div>

        <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full mt-2" />
      </div>
    </div>
  )
}
export default InfoCard

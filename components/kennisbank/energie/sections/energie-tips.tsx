import { DailyTips } from "../components/daily-tips"

export function EnergieTips() {
  return (
    <>
      <h2 id="daily-tips" className="text-2xl font-bold mb-4">
        Dagelijkse Besparingstips
      </h2>
      <p className="mb-6">
        Deze eenvoudige tips kunt u direct toepassen om uw energieverbruik te verlagen.
      </p>
      <DailyTips />
    </>
  )
}
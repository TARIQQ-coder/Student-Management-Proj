import InPerspective from './InPerspective'
import ProgressBars from './ProgressBars'

const BottomStats = () => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <InPerspective />
      <ProgressBars />
    </div>
  )
}

export default BottomStats

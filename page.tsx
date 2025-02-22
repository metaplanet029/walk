import WalkingAnimation from "./walking-animation"

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#FC0300" }}>
      <div className="w-full max-w-3xl">
        <WalkingAnimation />
      </div>
    </div>
  )
}


export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#4097DB] flex flex-col justify-center gap-16 p-10 md:p-16 order-last md:order-first">
        <div className="text-4xl leading-[34px] font-medium text-white">DiscoverYour Wonder</div>
        <div className="text-base text-white font-normal tracking-[0.01]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
      </div>
      <div className="bg-[#4097DB]">
        <img src="/hero.svg" alt="hero-image" className="w-full h-full"/>
      </div>
    </div>
  )
}

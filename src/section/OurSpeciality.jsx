import SliderComponent from "../components/SliderComponent"
import { style } from "../style"

export default function OurSpeciality() {
  return (
    <div className="border-x-[20px] border-y-[35px] border-[#509FDD] p-10" id="perks">
      <div className={`${style.title} text-center mb-6`}>OUR SPECIALITY</div>
      <div className="text-[#303030] text-sm leading-[20px] font-light text-center mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ullam repellat alias officiis optio fugit tenetur nemo deserunt mollitia quos vel itaque blanditiis, placeat iure sapiente, repellendus omnis quibusdam, doloribus labore ea atque accusantium. Veritatis magnam deleniti iste totam delectus, quae, sint autem animi quasi perferendis, vitae recusandae in quisquam. Voluptas suscipit non quibusdam quae ratione hic sit autem. Accusamus!</div>
      <div>
        <SliderComponent />
        <div className="text-center font-medium">Seep Improvment</div>
      </div>
      <div className="text-[#A7A7A7] text-sm leading-[24px] mt-10 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</div>
    </div>
  )
}

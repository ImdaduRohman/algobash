import { style } from "../style"
export default function OurValueSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ml-16">
      <div>
        <div className={`${style.title} mb-6`}>Our Core Values</div>
        <div className={style.content}>Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.</div>
        <div className="mt-6">
          <div className="flex items-start gap-4 mb-4">
            <img src="/strip.svg" alt="strip-image" className="mt-4"/>
            <div>
              <div className="text-base leading-[38px] font-normal">Dedication</div>
              <div className={style.content}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</div>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <img src="/strip.svg" alt="strip-image" className="mt-4"/>
            <div>
              <div className="text-base leading-[38px] font-normal">Dedication</div>
              <div className={style.content}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</div>
            </div>
          </div> 
          <div className="flex items-start gap-4 mb-4">
            <img src="/strip.svg" alt="strip-image" className="mt-4"/>
            <div>
              <div className="text-base leading-[38px] font-normal">Dedication</div>
              <div className={style.content}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <img src="/value.svg" alt="vale-image"/>
      </div>
    </div>
  )
}

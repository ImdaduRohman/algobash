import { style } from "../style"
export default function OurValueSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ml-10 md:ml-16 py-10 md:py-16" id="ourValues">
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
              <div className="text-base leading-[38px] font-normal">Intellectual Honesty</div>
              <div className={style.content}>NItaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.</div>
            </div>
          </div> 
          <div className="flex items-start gap-4 mb-4">
            <img src="/strip.svg" alt="strip-image" className="mt-4"/>
            <div>
              <div className="text-base leading-[38px] font-normal">Curiosity</div>
              <div className={style.content}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</div>
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

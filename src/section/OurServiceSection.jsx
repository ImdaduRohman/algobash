import { style } from "../style";

export default function OurServiceSection() {
  const cardContent = [
    {
      id: 1,
      title: 'Who we are',
      subTitle: 'Technology Company',
      content: 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
      id: 2,
      title: 'What we do',
      subTitle: 'Professional Brand Management',
      content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      id: 3,
      title: 'How we do',
      subTitle: 'Strategize, Design, Collaborate',
      content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.'
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center p-10 gap-4 bg-[#F8F8F8]">
      {
        cardContent.map((item) => (
          <div 
            key={item.id}
            className="shadow-lg p-10 "
          >
            <div className={style.title}>{item.title}</div>
            <div className={style.subTitle}>{item.subTitle}</div>
            <div className={style.content}>{item.content}</div>
          </div>
        ))
      }
    </div>
  )
}

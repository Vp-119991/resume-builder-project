import React from "react";
import { Title } from "./Title";

const Testimonial = () => {
  const cardsData = [
    {
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200',
      name: 'Olivia Brown',
      handle: '@olivia_007',
      date: 'Jan 10, 2026',
      review: 'The AI resume builder saved me hours. It even recommended role-specific keywords that recruiters love.'
    },
    {
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=200',
      name: 'Emily Martinez',
      handle: '@emily_martinez',
      date: 'Dec 7, 2025',
      review: 'I am impressed! The AI helped me highlight my achievements better and improved overall readability.'
    },
    {
      image: 'https://images.unsplash.com/photo-1541233349642-6e425fe6190e?q=80&w=200',
      name: 'Ava Thompson',
      handle: '@ava_thompson',
      date: 'Nov 28, 2025',
      review: 'From formatting to content suggestions, this AI-powered tool made my resume much more professional.'
    },
    {
      image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=200',
      name: 'William Garcia',
      handle: '@will_iam',
      date: 'July 10, 2025',
      review: 'I got feedback on what skills to emphasize. The AI resume builder is like having a career coach in your pocket!'
    },
    {
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
      name: 'Briar Martin',
      handle: '@briar.dev',
      date: 'April 20, 2025',
      review: 'The AI summary feature instantly improved my resume. I started getting interview calls within a week.'
    },
    {
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
      name: 'Avery Johnson',
      handle: '@averywrites',
      date: 'May 10, 2025',
      review: 'I love how clean and ATS-friendly the resumes are. The templates look modern and professional.'
    },
    {
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
      name: 'Jordan Lee',
      handle: '@jordanux',
      date: 'June 5, 2022',
      review: 'As a fresher, this tool helped me structure my resume perfectly. The AI suggestions are spot on.'
    },
    {
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
      name: 'Steaven Smith',
      handle: '@smithdiaries',
      date: 'June 18, 2024',
      review: 'The resume enhancement feature saved me hours. Editing and exporting is super smooth.'
    },
    // Additional 8 for bottom row
    {
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200',
      name: 'Sophia Williams',
      handle: '@sophia.williams',
      date: 'Oct 12, 2025',
      review: 'This AI tool highlighted my key achievements perfectly. Interviews increased drastically!'
    },
    {
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200',
      name: 'Liam Johnson',
      handle: '@liam_resume',
      date: 'Aug 8, 2025',
      review: 'User-friendly and accurate recommendations. Made my resume look very professional.'
    },
    {
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200',
      name: 'Emma Davis',
      handle: '@emma.75',
      date: 'Sept 14, 2024',
      review: 'AI suggestions are spot on. Helped me land multiple interviews within weeks.'
    },
    {
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200',
      name: 'Noah Brown',
      handle: '@noah.brown',
      date: 'Oct 3, 2024',
      review: 'Easy to use and very effective. Resume looks clean and recruiter-friendly.'
    },
    {
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200',
      name: 'Grace Wilson',
      handle: '@Grace.wilson',
      date: 'Nov 21, 2023',
      review: 'The AI suggestions saved me hours of work. Loved the modern templates!'
    },
    {
      image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=200',
      name: 'James Miller',
      handle: '@james.miller78',
      date: 'Dec 5, 2022',
      review: 'Perfect formatting and content recommendations. Got me noticed by recruiters!'
    },
    {
      image: 'https://images.unsplash.com/photo-1541233349642-6e425fe6190e?q=80&w=200',
      name: 'Charlotte Moore',
      handle: '@charlotte_1',
      date: 'April 20, 2025',
      review: 'AI resume builder is amazing! Easy, fast, and professional output.'
    },
    {
      image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=200',
      name: 'Lucas Taylor',
      handle: '@lucas.taylor',
      date: 'Jan 2, 2026',
      review: 'Helped me structure my resume like a pro. Highly recommend this tool.'
    },
    
  ];

const Card = ({ card }) => (
  <div className="w-72 shrink-0 mx-4 p-5 bg-white rounded-xl shadow-md hover:shadow-[0_10px_30px_rgba(34,10,194,0.35)] transition-all duration-300">
    <div className="flex items-center gap-3">
      <img src={card.image} alt={card.name} className="w-12 h-12 rounded-full" />
      <div>
        {/* Name + Blue Tick */}
        <div className="flex items-center gap-1">
          <p className="font-semibold text-gray-900">{card.name}</p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
              fill="blue"
            />
          </svg>
        </div>
        <span className="text-xs text-gray-500">{card.handle}</span>
      </div>
    </div>
    <p className="mt-4 text-sm text-gray-700 leading-relaxed">“{card.review}”</p>
    <p className="mt-4 text-xs text-gray-400">{card.date}</p>
  </div>
);


  return (
    <>
      {/* Header */}
      <div className="mt-20 ">
        <div className="w-full flex justify-center ">
          <div className="inline-flex items-center border border-blue-300 hover:border-slate-700 transition rounded-full px-4 py-1 text-sm ">
            <span className="text-blue-600 font-medium ">Testimonials</span>
          </div>
        </div>
        <Title
          title="Don't just take our words"
          description="Here’s what our users say about our AI Resume Builder. Real experiences from students, freshers, and professionals."
        />
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          animation: marqueeScroll 30s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      {/* Top row (first 8 cards) */}
      <div className="relative overflow-hidden max-w-6xl mx-auto">
        <div className="marquee flex min-w-[200%] py-10">
          {[...cardsData.slice(0, 8), ...cardsData.slice(0, 8)].map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
      </div>

      {/* Bottom row (next 8 cards) */}
      <div className="relative overflow-hidden max-w-6xl mx-auto">
        <div className="marquee marquee-reverse flex min-w-[200%] py-10">
          {[...cardsData.slice(8, 16), ...cardsData.slice(8, 16)].map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;

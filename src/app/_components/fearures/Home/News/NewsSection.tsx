import React from 'react'
import news1Img from "@/../public/Home/News/news5.jpg";
import news2Img from "@/../public/Home/News/news7.jpg";
import news3Img from "@/../public/Home/News/news8.jpg";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function NewsSection() {
    const newsArr: { img: string, text: string , id:number}[] = [{
        text: `Minimalist, elegant, powerful: ’90s heels were just that girl—collective—and
         they’re so back for 2026.When we think about the heel trends and shoe designs of 
         the formidable, stylish decade, most of us will go straight to that classic kitten 
         heel. But there’s so many more options to choose from, in various silhouettes and vibes,
          ultra-minimalist and marvelously maximalist. Consider the ’90s heels from the big players:
           Chanel’s two-tone pumps, Miu Miu’s geometric, stacked loafers, and Prada’s Mary Jane. 
           Right now, all those nostalgic styles are presenting themselves in a more contemporary way,
            and made all the more essential.` ,
            img:news1Img.src ,
            id:1

    }, {
        text:`Naked dressing is alive and well at the 2026 Golden Globes.This year 
        celebrities opted for different interpretations of the scandalous yet persistent 
        trend. Jennifer Lawrence—nominated tonight for her role in Die My Love—hit the carpet
         in a diaphanous dress from Givenchy by Sarah Burton. The nude mesh dress was strategically embroidered with pale pink flowers and sage green leaves that bloomed over her body and around the hemline. Lawrence also carried a pale pink satin stole that covered her backside, though she ditched it for her walk up the stairs.` ,
         img:news2Img.src ,
         id:2
    } , {
        img:news3Img.src ,
        text:`Jennifer Lopez, Nobody Wants This actor Justine Lupe, and Sabrina Elba also received the sheer memo. Lopez chose a vintage Jean-Louis Scherrer gown by Stéphane Rolland, sourced from Lily et Cie: a nude mesh turtleneck dress with brown swirling appliqué that carried down into her tulle mermaid skirt. Lupe, meanwhile, left little to the imagination in a nude tiered Armani Privé couture dress from fall 2021 with beaded fringe. Fellow archive deep diver Elba also turned to vintage, wearing a Guy Laroche fall-winter 2002 gown in a delicate, sheer embroidered nude.`,
        id:3
    }]
    return (
        <section className='bg-black py-20 text-white space-y-5'>
            <div className="title flex justify-between items-center cont">
                <h2 className='text-3xl italic'>News Arround this day</h2>
                <div className="group flex gap-1 transition-all duration-300 hover:text-rose-800 hover:translate-x-3 ">
                    <span>view more </span>
                    <ArrowRight/>
                </div>
            </div>
            <div className="news flex  flex-col md:flex-row gap-10 cont">
                {newsArr.map((news)=> <NewsCard key={news.id} news={news}/>)}
            </div>
        </section>
    )
}

function NewsCard({news}:{news: { img: string, text: string , id:number }}) {
    return (
        <div className="card space-y-5">
            <div className="img relative after:absolute after:inset-0 after:bg-black/40">
                <Image src={news.img} alt='fashion news image ' width={200} height={200} className='w-full  aspect-square object-cover object-top h-120 rounded-lg'/>
            </div>
            <div className="texts ">
                <h3>Fashion News</h3>
                <p className='text-stone-300 line-clamp-2'>{news.text}</p>
            </div>
            <div className="btn">
                <Button className='bg-white px-8 py-6 text-black w-full hover:bg-rose-800 hover:text-white duration-300 '>Buy now</Button>
            </div>
        </div>
    )
}

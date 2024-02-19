"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from '@/utils/cn'

export function EventItems(){

    const items = [
        {
            title:'Ying yod',
            description:'Test description',
            header:'Ying yod header',
            className:'',
            icon:''
        },
        {
            title:'Ying yod',
            description:'Test description',
            header:'Ying yod header',
            className:'',
            icon:'',
        },
        {
            title:'Ying yod',
            description:'Test description',
            header:'Ying yod header',
            className:'',
            icon:''
        },
        {
            title:'Ying yod',
            description:'Test description',
            header:'Ying yod header',
            className:'',
            icon:''
        }
    ]

    return(
        <BentoGrid>
            {
                items.map((item, i) => (
                    <BentoGridItem 
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={cn("[&>p:text-lg]", item.className)}
                        icon={item.icon}
                    />
                ))
            }
        </BentoGrid>
    )
}
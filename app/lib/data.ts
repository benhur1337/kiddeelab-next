import { courses } from './courses'
import { events } from './events'

export async function getCourse(course: string){
    
    const response = courses.find(item => item.slug == course)

    return response

}

export async function getEvents(event: string){

    const response = events.find(item => item.slug == event)

    return response
}

export async function fetchCertified(){
    const response = [
        {
            src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/certified/certified%20(1)-74vRn98vGXb9RacfQNJWqPEoSGOfBZ.jpg',
            label:'kiddeelab-certified'
        },
        {
            src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/certified/certified%20(2)-cWmrFt4PPxtyXhBdcF80NnhXJYduLl.jpg',
            label:'kiddeelab-certified'
        },
        {
            src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/certified/certified%20(4)-5pzUcMeXF2MKNRWRnWoJd8shXQaUxE.jpg',
            label:'kiddeelab-certified'
        },
        {
            src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/certified/certified%20(5)-FDORRxr3cCi9pqw9Dbjd7XXsiJUk8b.jpg',
            label:'kiddeelab-certified'
        },
        {
            src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/certified/certified%20(6)-qYHAHSPM5kKGObHqsnlKWdAqCZpY5s.jpg',
            label:'kiddeelab-certified'
        },
        {
            src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/certified/certified%20(7)-bCPsy08mhkvTHuRHMS6tMFaCBiDeI4.jpg',
            label:'kiddeelab-certified'
        },
        {
            src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/certified/certified%20(8)-Z9X55bQu70Qrqgnjy0xBmLOxgmG4zw.jpg',
            label:'kiddeelab-certified'
        },
        {
            src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/certified/certified%20(9)-wWWzmoSLNxdsHEMR9UQxc6xoCFOpQm.jpg',
            label:'kiddeelab-certified'
        },
        {
            src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/certified/certified%20(10)-x6Tpexj29YxLkua8xbgEvhwmcWOucz.jpg',
            label:'kiddeelab-certified'
        },
        {
            src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/certified/certified%20(11)-xx2i08l6YuzMsbCdrkhL0WQfFuJdR4.jpg',
            label:'kiddeelab-certified'
        },
        {
            src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/certified/certified%20(12)-5SuB96y1cvlX72AwyrDVzK9ldgg33q.jpg',
            label:'kiddeelab-certified'
        }
    ]

    return response
}

import {Assistant,Bitter} from 'next/font/google'
export const roboto=Assistant({
    subsets:['latin'],
    weight:['300','400','500','700'],
    display:'swap'
});

export const bitter=Bitter({
    subsets:['latin'],
    weight:['100','300','400','500','700','900'],
    display:'swap'
});

export default function HeaderPage() {
  return (
    <div>
        <div className='text-2xl p-4 text-red-700'>2.  By importing one or more fonts</div>
        <h1 className={`${roboto.className} text-2xl p-2`}> 
        you don't need to be Muslim to stand up for Palestine, you just need to be human</h1>
        <h1 className={`${bitter.className} text-2xl p-2`}> 
        Learn as if you will live forever, live like you will die tomorrow</h1>
    </div>
  )
}

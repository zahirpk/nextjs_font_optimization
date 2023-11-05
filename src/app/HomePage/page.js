import {Dancing_Script} from 'next/font/google'
export const dancingScript=Dancing_Script({subsets:['latin']});

export default function HomePage() {
  return (
    <div >
      <div className='text-2xl p-4 text-red-700'>1.  By importing single font</div>
      <div className={`${dancingScript.className} text-2xl px-4`}>
      When you give joy to other people, you get more joy in return.
      </div>
  </div>
  )
}

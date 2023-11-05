

import { poppins,recursive,montserrat } from "../../fonts/page.js";
export default function page() {
  return (
    <div>
      <div className='text-2xl p-4 text-red-700'>3.  By importing multiple fonts in separate file</div>
     <div className={`${poppins.className} text-2xl px-4` }>
     The quick brown fox jumps over the lazy dog</div>
    <div className={`${recursive.className} text-2xl px-4` }>
    The quick brown fox jumps over the lazy dog</div>
    <div className={`${montserrat.className} text-2xl px-4` }>
    The quick brown fox jumps over the lazy dog</div>
    </div>
    
  )
}

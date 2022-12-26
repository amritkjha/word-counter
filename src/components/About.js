import React from 'react'

export default function About(props) {
    
  return (
    <div>
      <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>About Us</h1>
      <p className={`text-${props.mode==='light'?'dark':'light'}`}>In this react course, we will see how to learn react using projects.
            This is going to be a project-based course full of real-world react projects. In this video, we will look into refactoring and moving all the controls and dark mode state up to the app component
            Make sure to access the playlist here (Important): https://www.youtube.com/playlist?list...
            All the source code and other material will be uploaded on codewithharry.com as and when available!
            ►Check out my English channel here: https://www.youtube.com/ProgrammingWi...
            ►Click here to subscribe - https://www.youtube.com/channel/UCeVM...

            Best Hindi Videos For Learning Programming:
            ►Learn Python In One Video - https://www.youtube.com/watch?v=ihk_X...

            ►Python Complete Course In Hindi - https://www.youtube.com/playlist?list...

            ►C Language Complete Course In Hindi -  
            https://www.youtube.com/playlist?list...

            ►JavaScript Complete Course In Hindi - 
            https://www.youtube.com/playlist?list...
        </p>
      {/* <button onClick={toggleMode} className='btn btn-primary'>{btnText}</button> */}
    </div>
  )
}

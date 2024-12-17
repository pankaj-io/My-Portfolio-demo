import React from 'react'

function About() {
  return (
    <>
        <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-0"> {/* Removed my-20 */}
            <div class="text-2xl md:text-4xl mt-4 md:mt-10 font-bold">About</div>
            <p className="text-md md:text-xl text-justify mt-4">pankaj kumar Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ea distinctio tempora dolores nisi omnis ab et cumque sequi modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores temporibus placeat sed aliquam perferendis atque veniam quaerat iusto cum doloribus.</p>
            <br />
            <div class="text-xl text-green-700 font-semibold">Educational and Training</div>
            <p className="text-md md:text-xl text-justify mt-1">[Degree/Certification],[Institution],[Year],[Degree/Certification],[Institution],[Year],[Relevent Course],[Plateform/Institution],[Year]</p>

            <br />
            <div class="text-xl text-green-700 font-semibold">Skills and Expertise</div>
            <p className="text-md md:text-xl text-justify mt-1">Proficient in [Programming languages] Experienced with [Software tools/technologies] Strong grasp of [Design principles/concepts] Excellent problem-solving skills Effective communicator and collborator</p>

            <br />
            <div class="text-xl text-green-700 font-semibold">Professional Experience</div>
            <p className="text-md md:text-xl text-justify mt-1">pankaj kumar Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ea distinctio tempora dolores nisi omnis ab et cum.</p>

            <br />
            <div class="text-xl text-green-700 font-semibold">Achievements and Awards</div>
            <p className="text-md md:text-xl text-justify mt-1">pankaj kumar Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ea distinctio tempora dolores nisi omnis ab et cum.</p>

            <br />
            <div class="text-xl text-green-700 font-semibold">Mission Statement</div>
            <p className="text-md md:text-xl text-justify mt-1">pankaj kumar Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ea distinctio tempora dolores nisi omnis ab et cum.</p>
        </div>
        <hr className='mt-4 md:mt-8'></hr>
    </>
  )
}

export default About
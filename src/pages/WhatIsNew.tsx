import Assets from "../assets/assets";

const WhatIsNew = () => {
    return (
        <>
        <div className="px-4 lg:container lg:mx-auto">
          <h1 className="font-mont-semibold leading-normal text-4xl md:text-6xl text-center mt-24 md:mt-36">
              What is nu.?
          </h1>
          <div className="mt-24 flex justify-center">
            <img src={Assets.images.homeWhatisNu} className="md:w-2/3" alt="What is nu"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-2">
            <div className="flex flex-col items-center mt-20">
              <img src={Assets.images.iconBook} className="w-24 h-24" alt="Icon Book"/>
              <h5 className="font-mont-semibold text-2xl md:text-3xl text-center mt-10">Adaptive Learning AI</h5>
              <p className="text-center mt-5 max-w-xs">
                Nu. works with CULMEN's Adaptive Learning AI developed jointly with a University
              </p>
            </div>
            <div className="flex flex-col items-center mt-20">
              <img src={Assets.images.iconExpert} className="w-24 h-24" alt="Icon Expert"/>
              <h5 className="font-mont-semibold text-2xl md:text-3xl text-center mt-10">Developed by experts</h5>
              <p className="text-center mt-5 max-w-xs">
                The first E-Learning HUB developed jointly with a University for the education sector with courses provided by the best Universities
              </p>
            </div>
            <div className="flex flex-col items-center mt-20">
              <img src={Assets.images.iconSkill} className="w-24 h-24" alt="Icon Skill"/>
              <h5 className="font-mont-semibold text-2xl md:text-3xl text-center mt-10">Skill-Based Learning</h5>
              <p className="text-center mt-5 max-w-xs">
                We have implemented a Skill-Based Learning Experience, perfectly matched to the classroom of tomorrow
              </p>
            </div>
          </div>
        </div>

        <div className="gradient-bg-2 h-32 w-full mt-20"></div>

        <div className="px-4 lg:container lg:mx-auto">
          <h1 className="font-mont-semibold leading-normal text-4xl md:text-5xl mt-24 md:mt-36">
            Key Features
          </h1>
          <p className="mt-5 max-w-2xl">
            Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
            <div>
              <ul className="list-none items-baseline mb-5 font-mont-semibold">
                <li>
                  <span className="text-indigo-900 mr-10">01</span>
                  Skill Manager & Event Manager
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">02</span>
                  Recommendation AI
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">03</span>
                  Online Exams & Synchronous Learning
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">04</span>
                  Interactive learning objects, Learning progress analyses & Self-responsible learning
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">05</span>
                  Action competence orientation
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">06</span>
                  Individual construction process
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-none items-baseline mb-5 font-mont-semibold">
                <li>
                  <span className="text-indigo-900 mr-10">07</span>
                  Potential orientation
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">08</span>
                  Self-regulation
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">09</span>
                  Transversal competences
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">10</span>
                  Problem solving competence
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">11</span>
                  Modular teaching
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">12</span>
                  Modular and flexible preparation for labour market
                </li>
              </ul>
            </div>
          </div>

          <h1 className="font-mont-semibold leading-normal text-4xl md:text-5xl mt-24 md:mt-36 text-center">
            What do we change?
          </h1>

          <p className="mt-5 text-center mt-10">
            Typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and
            scrambled
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-20 gap-4">
            <div className="md:h-144 lg:h-104 flex flex-col items-center rounded-xl color-bg-1 p-8">
              <img src={Assets.images.iconChg1} className="w-20 h-20" alt="Strengthening of self-efficacy expectations"/>
              <h6 className="font-mont-semibold text-blue-900 mt-10 text-center">Strengthening of self-efficacy expectations</h6>
              <p className="mt-5 text-blue-800 text-center text-sm">
                Strengthen confidence in the subjective achievement of objectives so that the goal (e.g. qualification procedures) can be effectively achieved. Many studies meanwhile prove that learners with high self-efficacy expectations rate their chances of success higher and also work more intensively on the achievement of objectives. Goal-oriented acting strengthens the self-efficacy expectation, because associated successes are associated with the own authority.
              </p>
            </div>
            <div className="md:h-144 lg:h-104 flex flex-col items-center rounded-xl color-bg-2 p-8">
              <img src={Assets.images.iconChg2} className="w-20 h-20" alt="Enabling and supporting the individual"/>
              <h6 className="font-mont-semibold text-blue-900 mt-10 text-center">Enabling and supporting the individual</h6>
              <p className="mt-5 text-blue-800 text-center text-sm">
                Studies show that talent and excellence in performance are not developed enough in education, e.g. learners who enter education with above-average talent potential are not necessarily those who perform excellently at the end of their education and vice versa. This confirms the findings of expert research (BAIRD, 1985; ERICSSON et al., 1993) that environmental and personality characteristics, such as the working climate, aspects of promotion or performance motivation of learners, are of far greater importance for the development of performance excellence than cognitive abilities.
              </p>
            </div>

            <div className="md:h-144 lg:h-104 flex flex-col items-center rounded-xl color-bg-3 p-8">
              <img src={Assets.images.iconChg3} className="w-20 h-20" alt="Competence orientation"/>
              <h6 className="font-mont-semibold text-blue-900 mt-10 text-center">Competence orientation</h6>
              <p className="mt-5 text-blue-800 text-center text-sm">
              Development of technical and interdisciplinary competences, skills and abilities to solve problems in the learning areas relevant to education and training. Maintaining and promoting employability and the readiness for lifelong learning.
              </p>
            </div>
            <div className="md:h-144 lg:h-104 flex flex-col items-center rounded-xl color-bg-4 p-8">
              <img src={Assets.images.iconChg4} className="w-20 h-20" alt="Increasing motivation and commitment"/>
              <h6 className="font-mont-semibold text-blue-900 mt-10 text-center">Increasing motivation and commitment</h6>
              <p className="mt-5 text-blue-800 text-center text-sm">
                Committed learners not only achieve higher performance, they develop socially and cognitively better than less committed learners. An OECD focus analysis has shown that learners from socially disadvantaged milieus not only perform less well, they are also less engaged and therefore more at risk of dropping out of education. The goal is therefore to overcome this discrepancy, i.e. to ensure that learners can develop a high level of commitment regardless of their milieu of origin.
              </p>
            </div>
          </div>

        </div>
      </>
    );
};

export default WhatIsNew;
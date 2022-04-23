import Assets from "../assets/assets";

const LifeLearning = () => {
    return (
        <>
        <div className="px-4 lg:container lg:mx-auto">
            <h1 className="font-mont-semibold leading-normal text-4xl md:text-6xl text-center mt-24 md:mt-36">
                Life long learning
            </h1>
            <div className="px-4 mt-24 flex justify-center">
                <img src={Assets.images.homeLifeLearning} className="md:w-3/4" alt="Life long learning"/>
            </div>
            
            <div className="grid grid-cols md:grid-cols-2 mt-24 md:mt-36">
                <div className="md:pr-10">
                    <h1 className="font-mont-semibold leading-normal text-4xl md:text-5xl mb-10">
                        The past of teaching
                    </h1>
                    <p className="mb-5">
                        The traditional way of learning is based on the classic frontal teaching concept, where the teacher is standing in front of the class and leading the students through the lesson. It does not always allow students to evolve properly and exploit their full potential as an individual.
                    </p>
                    <p>
                        To ensure that a class can keep up with the learning schedule, teachers focus on the weakest 30% of students. This means that the better students have to adapt and can only develop to a limited extent.
                    </p>
                </div>
                <div className="mt-24 md:mt-0 md:pl-10">
                    <h1 className="font-mont-semibold leading-normal text-4xl md:text-5xl mb-10">
                        The future of teaching
                    </h1>
                    <p className="mb-5">
                        It is therefore crucial that this has to be taken into account in order to offer future students a new learning concept tailored to them as individuals. With a modular structure of the learning material we enable students to deepen their knowledge in specific areas. Furthermore, students have the possibility to organize their learning material themselves which strengthens their social competence and their entrepreneurship. Teachers act as learning coaches and can therefore support students perfectly and efficiently in order to achieve the greatest possible potential in students.
                    </p>
                    <p>
                        Another advantage of this concept is that its modular structure allows it to adapt swiftly to dynamic market trends in order to prepare each student as well as possible for the future.
                    </p>
                </div>
            </div>
        </div>
        <div className="mt-20 h-32 color-bg-6"></div>
        <div className="px-4 lg:container lg:mx-auto">
            <div className="grid grid-cols md:grid-cols-2 mt-24 md:mt-36 mb-24">
                <div className="md:pr-10">
                    <h1 className="font-mont-semibold leading-normal text-4xl md:text-5xl mb-10">
                        Nu. Missions
                    </h1>
                    <p className="mb-5">
                        Nu.edu functions as learning platform which equips students with so-called missions. These missions, which can be created by teachers’ publishers or independent professors, are basically digitally prepared and structured teaching material consisting of various contents such as videos and text material.
                    </p>
                    <p>
                        The evaluation of these missions is done by the teachers who will then grade the students according to their result.
                    </p>
                </div>
                <div className="mt-24 md:mt-0 md:pl-10">
                    <h1 className="font-mont-semibold leading-normal text-4xl md:text-5xl mb-10">
                        Nu. Lxp
                    </h1>
                    <p className="mb-5">
                        Compared to other LXP platforms, Culmen LXP offers significantly more functions that are adapted to the latest educational standards. We worked closely with renowned experts in this field in order to thoroughly implement our idea into a sophisticated software which is going to remarkably influence the level of education all around the world.
                    </p>
                </div>
            </div>
        </div>
      </>
    );
};

export default LifeLearning;
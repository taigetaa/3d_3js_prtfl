// import 'react-vertical-timeline-component/style.min.css';

import { skills } from '../constants';
import CTA from '../components/CTA';

import useFadeIn from '../hooks/useFadeIn';

const About = () => {
  const { opacity } = useFadeIn(800);

  return (
    <section className="max-container" style={{ opacity }}>
      {/* <h1 className="head-text">
        Hello! I'm{' '}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Victoria
        </span>
      </h1>
      <div className="mt-5 flex flex-col gep-3 text-slate-500">
        <p className="font-semibold typing-animation">Frontend developer</p>
      </div> */}

      <div class="anim-container">
        <h1 className="head-text">Hello 👋 I'm</h1>
        <div className="anim-text  text-5xl">
          <div className="first blue-gradient_text font-semibold drop-shadow">
            <div>Victoria</div>
          </div>
          <div className="second blue-gradient_text font-semibold drop-shadow">
            <div>Web Developer</div>
          </div>
          <div className="third blue-gradient_text font-semibold drop-shadow">
            <div>Frontend Enthusiast</div>
          </div>
        </div>
      </div>

      <hr className="border-slate-200" />

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.alt}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;

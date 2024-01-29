import { Link } from 'react-router-dom';
// import { arrow, play } from '../assets/icons';
import CTA from '../components/cta';

const Achievments = () => {
  return (
    <section className="max-container h-[100vh] w-full">
      <h1 className="head-text typing-animation">
        My{' '}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Achievements
        </span>
      </h1>
      <div className="mt-5 mb-10 flex flex-col gep-3 text-slate-500">
        <p>
          I worked on user-friendly web interfaces, implemented new
          functionality for various components and pages, optimized perfomance.
          <br />
        </p>
      </div>

      <div className="mt-5 mb-10 flex flex-col gep-3 text-slate-500">
        <p>
          <b
            className="
            bg-gradient-to-r
            from-red-500
            via-green-500
            to-blue-500
            text-transparent
            bg-clip-text
            "
          >
            Responsibilities and achievements:
          </b>
        </p>
        <br />
        <p>
          - implemented popular web elements of varying complexity, such as
          modals, dropdowns, sliders, accordions, tabs, forms, etc.
          <br />
          - maintaining perfomance and user experience, using custom lazy
          loading
          <br />- added functionality for adding/removing goods to/from the cart
          as well as for manipulations with quantity and dynamically calculating
          total price
          <br />- implemented optimization of the project using a cloud service
          for the media content of the project.
        </p>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Achievments;

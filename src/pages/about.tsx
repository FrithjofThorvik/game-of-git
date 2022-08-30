import type { NextPage } from 'next';
import logo from '@/assets/images/logo.png';
import Developer from '@/components/pages/about/Developer';
import stevenFrancis from '@/assets/images/steven_francis.jpeg';
import frithjofThorvik from '@/assets/images/frithjof_thorvik.jpeg';

/**
 * About component
 * @return {JSX.Element} - The JSX code for About component
 */
const About: NextPage = (): JSX.Element => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src={logo.src} alt="Logo" className="w-32 mb-10" />
        <div className="flex justify-center items-center space-x-10">
          <Developer
            name="Frithjof Thorvik"
            imageSrc={frithjofThorvik.src}
            position="Web Developer"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio cupiditate quos eligendi aliquam, officiis modi aut voluptates, fugit recusandae expedita, magnam dolorem vero!"
          />
          <Developer
            name="Steven Francis"
            imageSrc={stevenFrancis.src}
            position="Web Developer"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio cupiditate quos eligendi aliquam, officiis modi aut voluptates, fugit recusandae expedita, magnam dolorem vero!"
          />
        </div>
      </div>
      <div className="primary-heading mt-10">About</div>
      <div className="content-text">
        This is a design project meant to showcase different design concepts
        coded in NextJS using Tailwind.
      </div>
      <div className="secondary-heading mt-5">Templates</div>
      <div className="content-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio
        cupiditate quos eligendi aliquam, officiis modi aut voluptates, fugit
        recusandae expedita, magnam dolorem vero! Accusamus aspernatur ratione
        laboriosam est animi sint dicta ipsam tempore ducimus unde at eum magnam
        cum natus, voluptatum obcaecati debitis.
      </div>
    </div>
  );
};

export default About;

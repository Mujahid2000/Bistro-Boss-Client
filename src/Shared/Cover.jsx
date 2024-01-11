import { Parallax } from 'react-parallax';

const Cover = ({img, bannerTitle, description}) => {
  return (
    <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
      
      <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" >
        <div className="absolute inset-0 bg-black opacity-60 mx-auto my-auto max-w-[1320px] max-h-[450px]">

        </div>
          <div className="text-center text-white z-10">
            <h1 className="text-6xl font-bold mb-5 font-serif">{bannerTitle}</h1>
              <p className="mb-5 text-lg font-sans w-[600px] mx-auto">{description}</p>
      </div>
    </div>
  
    </Parallax>
    
  );
};

export default Cover;
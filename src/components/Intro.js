const Intro = ({ introImg, introTitle, introSubTitle }) => {
   return (
      <section className="main-section intro">
         <div className="container">
            <div className="description">
               <h2 className="section-title">
                  {introTitle}
                  <span className="sub-text"> {introSubTitle}</span>
               </h2>
               <p className="text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloremque, id necessitatibus ipsam suscipit quibusdam sint
                  sit ratione adipisci et delectus eaque officia, animi
                  temporibus iure magni, totam nostrum minus sunt?
               </p>
               <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam fuga maiores in eos totam non, molestiae alias
                  asperiores magni adipisci explicabo cupiditate est mollitia
                  deserunt provident! Rerum reprehenderit in alias ducimus eum
                  eaque laudantium quaerat commodi similique voluptatum ad
                  temporibus, recusandae reiciendis corporis mollitia. Molestias
                  hic sapiente quaerat distinctio atque!
               </p>
               <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam fuga maiores in eos totam non, molestiae alias
                  asperiores magni adipisci explicabo cupiditate est mollitia
                  deserunt provident! Rerum reprehenderit in alias ducimus eum
                  eaque laudantium quaerat commodi similique voluptatum ad
                  temporibus, recusandae reiciendis corporis mollitia. Molestias
                  hic sapiente quaerat distinctio atque!
               </p>
            </div>
            <div className="intro-img">
               <img src={introImg} alt="intro" />
            </div>
         </div>
      </section>
   );
};

export default Intro;

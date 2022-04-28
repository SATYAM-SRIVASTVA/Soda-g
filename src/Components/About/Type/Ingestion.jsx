import React from "react";
import "./Ingestion.css";
import File from './file'
import Whereto from '../Whereto/Whereto'
import Youmight from '../Youmight/Youmight'


const Ingestion = () => {
  return (
    <>
    <File/>

    <div className="ingestion-main-container">
      <div className="ingestion-main-wrapper">
        <div className="ingestion-first-container">
          <p className="color-ingestion">
            Acidity and indigestion can be hard to tell apart. Some of the
            symptoms are the same for each of them and
            <br /> what’s more, some people actually have both acidity and
            indigestion!
          </p>
          <p>
            It’s no wonder a lot of people are unsure whether they have one or
            the other… or both… or perhaps
            <br /> something else. Don’t worry, we’re here to help clear up any
            confusion.
          </p>
          <p>
            Knowing whether you have acidity problems or indigestion can help
            make sure that you get relief from
            <br /> your symptoms, so read on!
          </p>
        </div>

        <div className="ingestion-second-container">
          <h2>Are Acidity And Indigestion Related?</h2>
          <p>
            The short answer to this question is ‘yes’.1,2,3 There is certainly
            a lot of overlap
            <br /> between the symptoms of acidity and indigestion, and there is
            also overlap between
            <br /> many of the causes and triggers.
          </p>
          <p>
            One of the defining symptoms of acidity problems is heartburn, which
            is a burning
            <br /> sensation in the centre of the chest.1,2 Heartburn can also
            be a symptom of
            <br />
            indigestion.
          </p>
        </div>

        <div className="ingestion-third-container">
          <h2>Overlap Of Symptoms In Acidity And Indigestion</h2>
          <div className="ingestion-image-container">
          <div className="ingestion-image">
            <div className="ingestion-image-wrapper"></div>
          </div>
          </div>
          <p>
            If you’d like to know more about acidity problems and heartburn,
            click here.
          </p>
          <p>
            Doctors are still doing studies to try and work out whether people
            who have indigestion and heartburn
            <br /> should have different treatments to people who have
            indigestion without heartburn.
          </p>
          <p>
            In the meantime, treatment, which includes changes to diet and
            lifestyle as well as medications, should<br></br> be based on the
            predominant symptoms.
          </p>
          <p>
            However, sodaG complements your body’s self defence mechanism to fight
            acid indigestion and associated
            <br /> symptoms such as heartburn or sour stomach which may cause an
            upset stomach
          </p>
        </div>

        <div className="ingestion-fourth-container">
          <h2>What Is Indigestion And What Causes It?</h2>
          <p className="ingestion-center">
            Picture this. You’ve just had your favourite meal for dinner and
            you’re relaxing with your family, when
            <br />
            all of a sudden you get a slightly painful, uncomfortable feeling in
            your stomach. What had been an
            <br />
            enjoyable evening turns into a long night.
          </p>
          <p className="ingestion-center">
            Unfortunately, this scenario is all too common. There’s a good
            chance it’s caused by indigestion, but it
            <br />
            doesn’t have to keep being this way. We can help you work out what
            might be triggering your
            <br /> symptoms, so you can know how to prevent them
          </p>
          <p className="ingestion-center">
            Indigestion, which in medical circles is called dyspepsia, is a
            general term to describe pain or
            <br /> discomfort in your stomach area.1,4 It’s not a disease or
            condition as such – it’s just a way to describe
            <br /> the symptoms you experience.
          </p>
          <p className="ingestion-center">
            In most cases, indigestion symptoms appear soon after eating, but
            they can start at any time. The
            <br /> types of symptoms you get and when you get them can vary from
            person to person, and some people
            <br /> may get symptoms only occasionally while others get them
            every day.
          </p>
          <p className="ingestion-center">
            Along with acidity problems, indigestion is one of the most common
            health complaints. A survey in
            <br /> Brazil showed that around 20% of people have indigestion
            symptoms at least once a month.5 This is
            <br />
            similar to other countries,2 but some estimates suggest indigestion
            could affect up to 40% of the <br />
            population.
          </p>
          <p className="ingestion-center">
            While there is no single cause of indigestion, there are many
            different things that can trigger it.
            <br />
            Most of these are related to your lifestyle and the things you eat
            and drink, including:
          </p>

          {/* image */}
          <p className="ingestion-left">
            Sometimes indigestion is caused by other digestive conditions or
            diseases, such as gallstones, constipation and Celiac disease.4 If
            you’re not sure if you have indigestion or not, or your symptoms
            worry you, it’s best to see your doctor.
          </p>
        </div>

        <div className="ingestion-fifth-container">
          <h2>What Are The Main Indigestion Symptoms?</h2>
          <p>
            There are a number of symptoms or combinations of symptoms you can
            have, and some people may not always have the same ones.1,4 The most
            common symptoms are:
          </p>

          <div
            className="ingestion-fifth-row-second row"
            style={{ margin: "0" }}>
            <div className="ingestion-fifth-seccol-first col col-lg-9 col-md-12 col-sm-12">
              <p><span className="ingestion-color">
                Feeling full before you’ve finished eating a meal</span><br/> You might not
                have eaten very much, but you already feel full and may not be
                able to finish eating.
              </p>
              <p>
              <span className="ingestion-color"> Feeling uncomfortably full after eating a meal</span><br/> You’ve eaten a
                normal meal, but you feel uncomfortably full and the feeling of
                fullness lasts longer than it should.
              </p>
              <p>
              <span className="ingestion-color">Having discomfort or pain in the stomach area</span><br/> You feel a mild to
                severe pain in your upper abdomen, which is the area between the
                bottom of your breastbone and your navel.
              </p>
              <p>
              <span className="ingestion-color">Having a painful, burning feeling in the chest</span><br/> You have
                heartburn or acid reflux, especially after eating a meal.
              </p>
              <p>
              <span className="ingestion-color"> Feeling a burning sensation in the stomach area</span> <br/>You have an
                uncomfortable heat or burning sensation in your upper abdomen.
              </p>
              <p>
              <span className="ingestion-color">Feeling bloated and uncomfortable</span><br/> You have an uncomfortable
                sensation of tightness in your stomach area due to a build-up of
                gas. Occasionally you might belch too.
              </p>
              <p>
              <span className="ingestion-color"> Feeling like you want to be sick</span> <br/>You sometimes feel nauseous, as
                though you want to vomit. (Of course, nausea and vomiting can be
                symptoms of many other problems too.)
              </p>
            </div>
            <div className="ingestion-fifth-seccol-second col col-lg-3 col-md-12 col-sm-12">
                <div className="ingestion-image-col">
                    <div className="ingestion-image-col-con"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Whereto/>
    <Youmight/>

    </>
  );
};

export default Ingestion;

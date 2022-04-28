import React from "react";
import "./Gred.css";
import Whereto from '../Whereto/Whereto'
import File from './file'
import Youmight from '../Youmight/Youmight'

const Gred = () => {
  return (
    <>
    <File/>
      <div className="gred-main-container">
      <div className="gred-main-wrapper">
        {/* first container */}
        <div className="gred-first-container">
          <h2>Understanding The Types Of Acidity Problems And Its Remedies</h2>
          <h3>
            <strong>
              You’ve probably heard people talk about acid reflux, gastric
              reflux or just plain reflux, as well as GERD, gastro-esophageal
              reflux and heartburn. These are all problems with acidity, and
              it’s estimated they affect up to 25% of adults at some time of
              their life.1
            </strong>
          </h3>
          <p>
            We all need stomach acid (gastric acid) to help us digest our food,
            but sometimes it ends up causing problems like the ones listed
            above. All these terms can be a bit confusing – are they different
            names for the same thing, or are they different things?
          </p>
          <p>
            If you have acidity problems, we can help you work out what’s going
            on and how to get relief. But before we do, it’s worth pointing out
            that if your symptoms are severe or prolonged, you should see your
            doctor.
          </p>
        </div>
        {/* second container */}
        <div className="gred-second-container">
          <h2>What Type Of Acidity Problem Do You Have?</h2>
          <p>
            To get to know more about acid reflux and gastro-esophageal reflux
            disease (GERD), it helps to understand a little bit about stomach
            acid.
          </p>
          <p>
            Our bodies produce stomach acid to help us digest our food.
            Generally, when our stomach acid stays in our stomach there aren’t
            any problems.
          </p>
          <p>
            We have a special ring of muscle at the entrance to the stomach,
            called the ‘lower esophogeal sphincter’(LES), to help us keep our
            stomach acid where it belongs.1,2 The LES relaxes to allow food and
            drink to enter our stomach, and then tightens again to keep it
            there.
          </p>
          <p>
            Sometimes though, the LES relaxes when we don’t want it to, allowing
            stomach acid to escape back up the esophagus. This is when we get
            ‘acidity problems’ like acid reflux, heartburn and GERD.
          </p>
        </div>
        {/* third container-table */}
        <div className="gred-third-container">
          <div className="gred-first-row row" style={{ margin: "0" }}>
            <h2>Symptom Checker</h2>
          </div>
          <div className="gred-second-row row" style={{ margin: "0" }}>
            <div className="gred-first-col col">
              <div className="gred-first-subrow row">
                <h3> Acid Reflux</h3>
                <ul>
                  <li>Sour, bitter taste in throat </li>
                  <li>Regurgitated food</li>
                </ul>
              </div>
              <div className="gred-second-subrow row">
                <h3> Heartburn</h3>
                <ul>
                  <li>Uncomfortable burning sensation in centre of chest</li>
                </ul>
              </div>
            </div>
            <div className="gred-second-col col">
              <h3> GERD</h3>
              <p>
                Symptoms of acid reflux and/or <br />
                heartburn at least once a week <br />
                over an extended period
              </p>
            </div>
          </div>
        </div>

        {/* fourth container */}
        <div className="gred-fourth-container">
          <div className="gred-fourth-subfirst">
            <h3>Acid Reflux</h3>
            <p>
              If acid from the stomach comes right up the oesophagus to the
              throat or mouth, this is called acid reflux. Around 16% of the
              population in Western countries is affected by acid reflux
            </p>
          </div>
          <div className="gred-fourth-subsecond">
            <h3>Heartburn</h3>
            <p>
              Heartburn tends to occur when stomach acid or acidic gases are
              lower down the esophagus.1 In Western countries, approximately 23%
              of the population is affected by heartburn.
            </p>
          </div>
          <div className="gred-fourth-subthird">
            <h3>GERD</h3>
            <p>
              This is the term used when people regularly have acid reflux,
              heartburn or other symptoms caused by the presence of gastric acid
              in the esophagus. GERD affects around 20% of people in the West
              and between 3% and 16% of people in Asia
            </p>
            <p>
              Please remember that chest pain can be a symptom of a heart
              problem, especially if you also have shortness of breath or pain
              in the arm or jaw. If you have these symptoms it’s important to
              get checked straight away
            </p>
          </div>
        </div>

        {/* fifth container */}
        <div className="gred-fifth-container">
          <h2>It’s OK, Help Is At Hand, Or Should We Say sodaG Is!</h2>
          <p>
            Whether you have acid reflux, heartburn or GERD, you’ll be happy to
            know that there are a number of
            <br />
            things you can do to stop or reduce the symptoms and help prevent
            them from occurring again.
          </p>
          <p>
            Most doctors recommend trying some changes to your lifestyle as the
            first step.1-4 It’s generally best to
            <br /> try a couple of changes at a time so you can see which ones
            work and which ones don’t.
          </p>
          <p>
            You might already have a good idea of something that might trigger
            your symptoms – if you do, changing
            <br /> that is obviously the best place to start.
          </p>
        </div>

        {/* sixth container */}
        <div className="gred-sixth-container">
          <div className="gred-sixth-first-wrapper">
            <div className="gred-sixth-subfirst">
              <div className="gred-image1"></div>
            </div>
            <div className="gred-sixth-subsecond">
              <h3>Eat Smaller, More-Frequent Meals</h3>
              <p>
                A lot of people find they get acid reflux or heartburn after
                eating a big meal. This may be
                <br />
                because having a very full stomach can put pressure on your
                lower esophogeal sphincter. Try
                <br />
                eating four or five smaller meals a day instead of three large
                ones.
              </p>
            </div>
          </div>

          <div className="gred-sixth-first-wrapper">
            <div className="gred-sixth-subfirst">
              <div className="gred-image2"></div>
            </div>
            <div className="gred-sixth-subsecond">
              <h3>Maintain A Healthy Weight</h3>
              <p>
                There is some evidence that if you’re overweight, losing some
                weight can help reduce the
                <br /> symptoms of acid reflux or heartburn. We know losing
                weight can be difficult and there is a lot
                <br /> of conflicting advice about the best way to do it, so
                it’s a good idea to ask your doctor.
              </p>
            </div>
          </div>

          <div className="gred-sixth-first-wrapper">
            <div className="gred-sixth-subfirst">
              <div className="gred-image3"></div>
            </div>
            <div className="gred-sixth-subsecond">
              <h3>Try Healthier Food And Drinks</h3>
              <p>
                Some foods or drinks, such as fatty and spicy foods, alcohol,
                tea, coffee and other caffeinated
                <br /> drinks, seem to trigger symptoms. It can be hard to avoid
                foods you love, but if you think that a<br /> particular food or
                drink might be a problem, try avoiding it for a while and see if
                it makes a<br /> difference.
              </p>
            </div>
          </div>

          <div className="gred-sixth-first-wrapper">
            <div className="gred-sixth-subfirst">
              <div className="gred-image4"></div>
            </div>
            <div className="gred-sixth-subsecond">
              <h3>Eat Well Before Going To Bed And Sleep On Your Left Side</h3>
              <p>
                If you tend to get symptoms at night or when you go to bed,
                there are a few things you can try.
                <br /> Avoid eating a meal within 3 hours of going to bed, and
                prop up the head of your bed by 10 to 15
                <br /> centimeters to help stop stomach acid from rising up into
                your esophagus. It’s also best to sleep on your left side.
              </p>
            </div>
          </div>

          <div className="gred-sixth-first-wrapper">
            <div className="gred-sixth-subfirst">
              <div className="gred-image5"></div>
            </div>
            <div className="gred-sixth-subsecond">
              <h3>Reach Out For sodaG</h3>
              <p>
                When acidity shows up despite such precautions, know that sodaG
                <br /> has your back. sodaG complements your body’s natural
                defence mechanism to fight heartburn,
                <br /> acid indigestion or sour stomach, and gets to work in
                just 6 seconds
              </p>
            </div>
          </div>
        </div>

        {/* seventh container */}
        <div className="gred-seventh-container">
          <div className="gred-seventh-head">
            <h2>TREATMENTS LIKE ANTACIDS CAN ALSO HELP</h2>
          </div>
          <p>
            As well as making some changes to your lifestyle, medications can be
            very helpful to manage the
            <br /> symptoms of acid reflux, heartburn or GERD.
          </p>
          <p>
            There are three main types of medications to treat acidity symptoms:
          </p>
          <p>
            <span className="gred-seventh-span"> Antacids</span> – like sodaG,
            these work by neutralising the acid in your stomach (gastric acid).
            It’s usually
            <br /> recommended to try an antacid before other medications
            because they’re readily available from
            <br />
            pharmacies and they tend to provide relief very quickly.
          </p>
          <p>
            <span className="gred-seventh-span">
              {" "}
              H2-receptor antagonists (H2RAs)
            </span>
            – These are designed to reduce the amount of gastric acid you
            <br /> produce. They don’t work as quickly as antacids, but the
            effects may last longer.
          </p>
          
          <p>
            <span className="gred-seventh-span">
              {" "}
              Proton pump inhibitors (PPIs){" "}
            </span>
            – These work in a similar way to H2RAs, but they are more powerful
            and
            <br /> therefore may be more effective if your symptoms are more
            severe.
          </p>
          <p className="last-enter">You should speak to your doctor if your symptoms persist despite the use of over-the-counter medications such as antacids.</p>
        </div>
      </div>
      <Whereto/>
      </div>
      <Youmight/>
    </>
  );
};

export default Gred;

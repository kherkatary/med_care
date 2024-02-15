import React from "react";
import "./Service.scss";

const Service = () => {
  return (
    <>
      <div className="HeadingImage">
        <div className="virtualbox">Our Services</div>
        {/* <img src="https://cdn.pixabay.com/photo/2017/01/30/02/20/mental-health-2019924_1280.jpg" alt="" /> */}
      </div>
      <div className="ServiceContainer">
        <div className="ServiceBox">
          <img
            className="ServImg"
            src="https://cdn.pixabay.com/photo/2017/11/26/15/16/smiley-2979107_640.jpg"
            alt=""
          />
          <h3>Individual Therapy</h3>
          <p className="servicePara">
            Discover a path to personal growth, resilience, and well-being with
            individual therapy at Nurture Mental Health. Our dedicated
            therapists offer confidential and customized sessions to address a
            range of mental, emotional, and behavioral challenges. Some
            psychological challenges we can help to deal with are :
            <ul>
              <li>
                <span>Depression</span>
              </li>
              <li>
                {" "}
                <span>Anxiety</span>
              </li>
              <li>
                {" "}
                <span> Sleeping issues</span>
              </li>
              <li>
                {" "}
                <span>Stress management</span>
              </li>
              <li>
                {" "}
                <span> Negative thoughts</span>
              </li>
              <li>
                {" "}
                <span>Anger issues</span>
              </li>
              <li>
                {" "}
                <span> Fear/Phobia</span>
              </li>
            </ul>
          </p>
          <button className="readMorebtn">Read More</button>
        </div>

        <div className="ServiceBox">
          <img
            className="ServImg"
            src="https://cdn.pixabay.com/photo/2017/11/26/15/16/smiley-2979107_640.jpg"
            alt=""
          />
          <h3>Family Therapy</h3>
          <p className="servicePara">
            We understand the importance of family dynamics in shaping
            individual well-being. We provide a supportive and collaborative
            environment to address a variety of relational challenges and foster
            positive connections. Some psychological challenges we can help to
            deal with are :
            <ul>
              <li>
                <span>Communication Issues</span>
              </li>
              <li>
                {" "}
                <span>Parenting Challenges</span>
              </li>
              <li>
                {" "}
                <span>Blended Family Adjustments</span>
              </li>
              <li>
                {" "}
                <span>Crisis and Trauma</span>
              </li>
              <li>
                {" "}
                <span>Grief and Loss</span>
              </li>
              <li>
                {" "}
                <span>Behavioral Problems:</span>
              </li>
            </ul>
          </p>
          <button className="readMorebtn">Read More</button>
        </div>

        <div className="ServiceBox">
          <img
            className="ServImg"
            src="https://cdn.pixabay.com/photo/2017/11/26/15/16/smiley-2979107_640.jpg"
            alt=""
          />
          <h3>Couple Therapy</h3>
          <p className="servicePara">
            At Nurture Mental Health, we recognize the importance of healthy and
            thriving relationships. Our couple therapy services provide a
            supportive and confidential space for couples to enhance
            communication, strengthen connections, and navigate challenges
            together. Key services include :
            <ul>
              <li>
                <span>Communication Enhancement</span>
              </li>
              <li>
                {" "}
                <span>Conflict Resolution</span>
              </li>
              <li>
                {" "}
                <span>Intimacy and Connection</span>
              </li>
              <li>
                {" "}
                <span>Pre-marital Counseling</span>
              </li>
              <li>
                {" "}
                <span>Infidelity and Trust Issues</span>
              </li>
              <li>
                {" "}
                <span>Parenting Challenges</span>
              </li>
            </ul>
          </p>
          <button className="readMorebtn">Read More</button>
        </div>

        <div className="ServiceBox">
          <img
            className="ServImg"
            src="https://cdn.pixabay.com/photo/2017/11/26/15/16/smiley-2979107_640.jpg"
            alt=""
          />
          <h3>Kids & Adolescent Therapy</h3>
          <p className="servicePara">
            At Nurture mental Health we understand the unique challenges that
            children and adolescents face in today's world. Our dedicated team
            of therapists specializes in providing compassionate and effective
            therapy to support the emotional and mental well-being of young
            minds.Key services include :
            <ul>
              <li>
                <span>Anxiety and Stress:</span>
              </li>
              <li>
                {" "}
                <span>Behavioral Challenges</span>
              </li>
              <li>
                {" "}
                <span>School-related Issues:</span>
              </li>
              <li>
                {" "}
                <span>Family Transitions</span>
              </li>
              <li>
                {" "}
                <span>Social Skills Development</span>
              </li>
              <li>
                {" "}
                <span>Trauma and Grief</span>
              </li>
            </ul>
          </p>
          <button className="readMorebtn">Read More</button>
        </div>

        <div className="ServiceBox">
          <img
            className="ServImg"
            src="https://cdn.pixabay.com/photo/2017/11/26/15/16/smiley-2979107_640.jpg"
            alt=""
          />
          <h3>Awareness & Sensitization Programs</h3>
          <p className="servicePara">
            We are committed to fostering awareness and promoting sensitization
            on important issues. Our programs aim to educate, empower, and
            inspire individuals and communities to create positive change..Key services include :
            <ul>
              <li>
                <span>Mental Health Awareness</span>
              </li>
              <li>
                {" "}
                <span>Diversity and Inclusion</span>
              </li>
              <li>
                {" "}
                <span>Gender Equality</span>
              </li>
              <li>
                {" "}
                <span>Environmental Sustainability</span>
              </li>
              <li>
                {" "}
                <span>Social Justice</span>
              </li>
              <li>
                {" "}
                <span>Well-being and Self-Care</span>
              </li>
            </ul>
          </p>
          <button className="readMorebtn">Read More</button>
        </div>

        <div className="ServiceBox">
          <img
            className="ServImg"
            src="https://cdn.pixabay.com/photo/2017/11/26/15/16/smiley-2979107_640.jpg"
            alt=""
          />
          <h3>Carrier Counselling</h3>
          <p className="servicePara">
            We are dedicated to helping individuals discover, plan, and achieve
            fulfilling careers. Our career counseling services provide
            personalized guidance to empower you on your professional
            journey.Our Career Exploration Services include:
            <ul>
              <li>
                <span>Career Exploration Assessments</span>
              </li>
              <li>
                {" "}
                <span>Industry Insights and Trends</span>
              </li>
              <li>
                {" "}
                <span>Identify Skills & Values</span>
              </li>
              <li>
                {" "}
                <span>Networking Strategies</span>
              </li>
              <li>
                {" "}
                <span>Internship & Job Shadowing</span>
              </li>
            </ul>
          </p>
          <button className="readMorebtn">Read More</button>
        </div>

        <div className="ServiceBox">
          <img
            className="ServImg"
            src="https://cdn.pixabay.com/photo/2017/11/26/15/16/smiley-2979107_640.jpg"
            alt=""
          />
          <h3>Addiction and Substance Abuse Counseling</h3>
          <p className="servicePara">
            Our services provide compassionate and evidence-based support for
            individuals facing challenges related to substance use. We
            understand the complexities of addiction and are dedicated to
            helping you on your journey to recovery, providing guidance,
            understanding, and tailored interventions..Key services include :
            <ul>
              <li>
                <span>Assessment & Evaluation</span>
              </li>
              <li>
                {" "}
                <span>CBT</span>
              </li>
              <li>
                {" "}
                <span>Group Therapy Sessions</span>
              </li>
              <li>
                {" "}
                <span>Family Counseling and Support</span>
              </li>
              <li>
                {" "}
                <span>Holistic Well-being Approach</span>
              </li>
              <li>
                {" "}
                <span>12 Steps Program</span>
              </li>
              <li>
                {" "}
                <span>Individual Counseling</span>
              </li>
            </ul>
          </p>
          <button className="readMorebtn">Read More</button>
        </div>

        <div className="ServiceBox">
          <img
            className="ServImg"
            src="https://cdn.pixabay.com/photo/2017/11/26/15/16/smiley-2979107_640.jpg"
            alt=""
          />
          <h3>LGBTQ+ Affirmative Counseling</h3>
          <p className="servicePara">
            Our services provide a safe, inclusive, and affirming space for
            individuals within the LGBTQ+ community. We understand the unique
            challenges and experiences faced by this diverse community and are
            committed to offering support, understanding, and empowerment.
            Whether you're navigating issues related to identity, relationships,
            or mental health, our counselors are here to assist you on your
            journey.Key services include :
            <ul>
              <li>
                <span>Identity Exploration</span>
              </li>
              <li>
                {" "}
                <span>Coming Out Support</span>
              </li>
              <li>
                {" "}
                <span>Gender-Affirming Therapy</span>
              </li>
              <li>
                {" "}
                <span>Family Reconciliation</span>
              </li>
              <li>
                {" "}
                <span>Community Connection & Resources</span>
              </li>
              <li>
                {" "}
                <span> Relationship Counseling</span>
              </li>
            </ul>
          </p>
          <button className="readMorebtn">Read More</button>
        </div>
      </div>
    </>
  );
};
export default Service;

import React from 'react';
import {
  Header,
  Summary,
  Experience,
  // Projects,
  // Skills,
  List,
  Education,
  // Footer,
  SEO
} from '../components';
import resume from '../../data/profile';
import '../main.css';

const Home = () => (
  <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
    <SEO title="Resume" />
    <div className="container mx-auto shadow bg-white py-5 px-10">
      <Header
        contacts={resume.contact}
        name={resume.fullname}
        role={resume.role}
      />
      <Summary data={resume.summary} />
      <div className="border-b border-neutral-300 pb-2 my-5 lg:flex">
        <div className="lg:w-2/3 lg:pr-8">
          {resume.experience && <Experience data={resume.experience} />}
          {resume.education && <Education data={resume.education} />}
          {/* {resume.projects && <Projects data={resume.projects} />} */}
        </div>
        <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 ">
          {/* {resume.skills && <Skills data={resume.skills} />} */}
          {resume.sidebar &&
            resume.sidebar.map(item => (
              <List key={`${item.title}-side`} data={item} />
            ))}
          <section style={{ paddingTop: '25px', paddingBottom: '25px' }}>
            <a href='https://github.com/clertonraf/gatsby-resume-cms/raw/master/src/assets/Resume_Gilmara_Wamser.pdf'>
              <h1 className="section-header">Download Lebenslauf</h1>
            </a>
          </section>
        </div>
      </div>
      {/* <Footer social={resume.social} /> */}
    </div>
  </main>
);

export default Home;

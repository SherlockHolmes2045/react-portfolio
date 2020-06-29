import React, {
  Component
} from 'react';
import './App.css';
import Hello from './Hello';
import Resume from './Resume';
import Skill from './Skill';
import ProjectCard from './ProjectCard';
import Contact from './Contact';
import Modal from './Modal';

class App extends Component {
  render() {
    const educations = [
      {
        title: "UCAC-ICAM under exia.cesi franchise",
        date:"2018 - 2020",
        content:"BAC+2"
      },
      {
        title: "College Adonai",
        date:"2017 - 2018",
        content:" Baccalaureat D mention good"
      },
      {
        title: "College Adonai",
        date:"2014-2015",
        content:" BEPC"
      },
    ];
    const professional = [
      {
        title: "Internship at Miouzik",
        date:"June 2019 - August 2019",
        content:"Laravel developer"
      },
      {
        title: "Homnet",
        date:"September 2019",
        content:"Freelance missions for HOMNET as a wordpress and Laravel developer"
      },
      {
        title: "Afriland First Bank",
        date:"August 2019",
        content:"Freelance mission as a Laravel developer"
      },
    ];
    const webSkills = [
      {
        title:"html5",
        value:"95%",
        progress: 95
      },
      {
        title:"css3 & bootstrap 4",
        value:"75%",
        progress:75
      },
      {
        title:"javasript & jquery",
        value:"80%",
        progress:80
      },
      {
        title:"PHP",
        value:"65%",
        progress:65
      },
      {
        title:"Laravel",
        value:"80%",
        progress:80
      },
      {
        title:"Nodejs",
        value:"70%",
        progress:60
      },
      {
        title:"Angular",
        value:"50%",
        progress:50
      },
      {
        title:"Vuejs",
        value:"60%",
        progress:60
      },
      {
        title:"Wordpress",
        value:"60%",
        progress:60
      },
    ];
    const desktopSkills = [
      {
        title:"Java SE & JavaFX",
        value:"70%",
        progress:70
      },
      {
        title:"Electronjs",
        value:"50%",
        progress:50
      },
      {
        title:"Unity",
        value:"30%",
        progress:30
      },
      {
        title:"Kotlin",
        value:"30%",
        progress:30
      },
      {
        title:"Unreal engine",
        value:"10%",
        progress:10
      },
    ];
    const mobileSkills = [
      {
        title:"Flutter",
        value:"40%",
        progress:40
      },
      {
        title:"Kotlin",
        value:"20%",
        progress:20
      },
      {
        title:"Java",
        value:"25%",
        progress:25
      },
      {
        title:"Firebase",
        value:"20%",
        progress:20
      }
    ];
    const tools = [
      {
        title:"Maven",
        value:"50%",
        progress:50
      },
      {
        title:"Git",
        value:"60%",
        progress:60
      },
      {
        title:"UML & Merise modelization",
        value:"60%",
        progress:60
      },
      {
        title:"Mysql & mongoDB",
        value:"50%",
        progress:50
      },
    ];

    const networkingSkills = [
      {
        title:"Networking",
        value:"30%",
        progress:30
      },
      {
        title:"Virtualisation",
        value:"40%",
        progress:40
      },
      {
        title:"System administration",
        value:"30%",
        progress:30
      },
    ];

    const embeddedSkills = [
      {
        title:"Arduino",
        value:"55%",
        progress:55
      },
      {
        title:"C & C++",
        value:"60%",
        progress:60
      }
    ];
    const embeddedSkillsContent = embeddedSkills.map((item,key) =>
    <Skill title={item.title} value={item.value} progress={item.progress} key={key}/>
);
    const networkingSkillsContent = networkingSkills.map((item,key) =>
    <Skill title={item.title} value={item.value} progress={item.progress} key={key}/>
);
    const toolsContent = tools.map((item,key) =>
    <Skill title={item.title} value={item.value} progress={item.progress} key={key}/>
);
    const mobileSkillsContent = mobileSkills.map((item,key) =>
    <Skill title={item.title} value={item.value} progress={item.progress} key={key}/>
);
    const desktopSkillsContent = desktopSkills.map((item,key) =>
    <Skill title={item.title} value={item.value} progress={item.progress} key={key}/>
    );
    const webSkillsContent = webSkills.map((item,key) =>
    <Skill title={item.title} value={item.value} progress={item.progress} key={key}/>
    );
    const professionalContent = professional.map((item,key) =>
    <Resume content={item.content} date={item.date} title={item.tile} key={key}/>
    );
    const educationContent = educations.map((item,key) =>
      <Resume content={item.content} date={item.date} title={item.tile} key={key}/>
    )

    const projects = [
      {
        tags:["Java SE","Maven","SQL"],
        git:"https://github.com/SherlockHolmes2045/Java-boulderdash-UML",
        description:"This is a remake of a retro nintendo game named Boulderdash",
        title:"Retro nintendo game reamake boulderdash",
        hero:"assets/img/boulderdash.png",
        target:"#boulderdash",
        portfolio:"desktop-app"
      },
      {
        tags:["Flutter","Dart","Gradle"],
        git:"#",
        description:"Redisgning Netflix UI with Flutter",
        title:"Netflix UI redesign",
        hero:"assets/img/netflix.png",
        target:"#netflix",
        portfolio:"mobile apps"
      },
      {
        tags:["html5","css3","javascript","jquery","laravel","sql"],
        git:"https://github.com/3-019/projet-Icare",
        description:"A web application to manage students data in a school and provide feedback to parent.",
        title:"ICARE",
        hero:"assets/img/icare.PNG",
        target:"#icare",
        portfolio:"web-app"
      },
      {
        tags:["html5","css3","javascript","jquery","laravel","sql"],
        git:"#",
        description:"A web application to archive and manage documents for a big structure.",
        title:"Electronic document management",
        hero:"assets/img/edms.PNG",
        target:"#edms",
        portfolio:"web-app"
      },
    ];
    const modals = [
      {
        tags:["Java SE","Maven","SQL"],
        git:"https://github.com/SherlockHolmes2045/Java-boulderdash-UML",
        description:"This is a remake of a retro nintendo game named Boulderdash",
        title:"Retro nintendo game reamake boulderdash",
        hero:"assets/img/boulderdash.png",
        id:"boulderdash",
      },
      {
        tags:["Flutter","Dart","Gradle"],
        git:"#",
        description:"Redisgning Netflix UI with Flutter",
        title:"Netflix UI redesign",
        hero:"assets/img/netflix.png",
        id:"netflix",
      },
      {
        tags:["html5","css3","javascript","jquery","laravel","sql"],
        git:"https://github.com/3-019/projet-Icare",
        description:"A web application to manage students data in a school and provide feedback to parent.",
        title:"ICARE",
        hero:"assets/img/icare.PNG",
        id:"icare",
      },
      {
        tags:["html5","css3","javascript","jquery","laravel","sql"],
        git:"#",
        description:"A web application to archive and manage documents for a big structure.",
        title:"Electronic document management",
        hero:"assets/img/edms.PNG",
        id:"edms",
      },
    ];
    const modalsContent = modals.map((item,key) =>
    <Modal tags={item.tags} git={item.git} description={item.description} title={item.description} hero={item.hero} key={key} id={item.id}/>
    );
    const projectsContent = projects.map((item,key) =>
    <ProjectCard tags={item.tags} git={item.git} description={item.description} title={item.description} hero={item.hero} portfolio={item.portfolio} key={key} target={item.target}/>
    );
    return (
      <div>
        <Hello/>
        <section id="resume" className="container section">
        <div className="row">
          <div className="col-md-10">
            <h2 id="resume_header" className="section__title">Resume_</h2>
            <p className="section__description">
              A little resume about my academic and professional course
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 section__resume resume-list">
            <h3 className="resume-list_title">education</h3>
            {educationContent}
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 section__resume resume-list">
            <h3 className="resume-list_title">Professional</h3>
            {professionalContent}
          </div>
        </div>

        <div className="row section__resume progress-list js-progress-list">
          <div className="col-md-12">
            <h3 className="progress-list__title">general skills</h3>
          </div>
          <div className="col-md-5 mr-auto">
            <span>Web Development</span>
            {webSkillsContent}
            <br/>
            <span>Networking & system administration</span>
            {networkingSkillsContent}
            <br/>
            <span>Iot</span>
            {embeddedSkillsContent}
          </div>
          <div className="col-md-5 mr-auto">
            <span>Desktop development</span>
            {desktopSkillsContent}
            <br/>
            <span>Development mobile</span>
            {mobileSkillsContent}
            <br/>
            <span> Tools</span>
            {toolsContent}
          </div>
        </div>
      </section>
    <section id="portfolio" className="container section">
    <div className="row">
      <div className="col-md-12">
        <h2 id="portfolio_header" className="section__title">My projects_</h2>
      </div>
    </div>
    <div className="row portfolio-menu">
      <div className="col-md-12">
        <nav>
          <ul>
            <li><a href="#" data-portfolio-target-tag="all">all</a></li>
            <li><a href="#" data-portfolio-target-tag="mobile apps">mobile apps</a></li>
            <li><a href="#" data-portfolio-target-tag="web-app">web-app</a></li>
            <li><a href="#" data-portfolio-target-tag="desktop-app">desktop-app</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div className="portfolio-cards">
      {projectsContent}
    </div>
    </section>
    <Contact tel="655480901" email="lemovou@gmail.com" facebook="https://www.facebook.com/ivan.lemovou" linkedin="https://www.linkedin.com/in/ivan-lemovou-98a585171/" github="https://github.com/SherlockHolmes2045" copyrigth="© 2019 Ivan Lemovou"/>
    {modalsContent}
   </div>
    )
  }
}



export default App;
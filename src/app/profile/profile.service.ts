import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;
  experience:string=''

  constructor(
    private http: HttpClient
  ) {
    function calculateExperience(startDate:any) {
      const start = new Date(startDate);
      const now = new Date();
    
      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
    
      if (months < 0) {
        years -= 1;
        months += 12;
      }
    
      return `${years} year${years !== 1 ? 's' : ''} and ${months} month${months !== 1 ? 's' : ''}`;
    }
    
    // Example usage
    this.experience = calculateExperience('2021-12-06');
    console.log(`Software Developer with s${this.experience} of hands-on experience.`);
   }

  projects:any = [
    {
      id: 1,
      title: 'Ecommerce application',
      desc: '',
      livedemo: 'https://legalcliq-ecom-app.netlify.app',
      githurl: 'https://github.com/shivaputra23/LegalCliQ_angular.git',
      imgUrl: 'assets/images/legalcliq.png',
      tech: 'Angular 10, Node, MongoDB, Express'
    },
    {
      id: 2,
      title: 'Hacker News App Clone using ReactJS ',
      desc: '',
      livedemo: 'https://hacker-news-clone23.herokuapp.com/',
      githurl: 'https://github.com/shivaputra23/Hacker-News-Clone.git',
      imgUrl: 'assets/images/hacker.png',
      tech: 'React JS'
    },
    {
      id: 3,
      title: 'Personal Portfolio Using HTML,CSS,Javascript',
      desc: '',
      livedemo: 'https://shivaputra-profile.herokuapp.com/',
      githurl: 'https://github.com/shivaputra23/Portfolio.git',
      imgUrl: 'assets/images/portfolio2.png',
      tech: 'HTML, CSS, Javascript'
    },
    {
      id: 4,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://shivaputra-portfolio.netlify.app/',
      githurl: 'https://github.com/shivaputra23/shiva-s-portfolio.git',
      imgUrl: 'assets/images/portfolio1.png',
      tech: 'Angular,Bootstrap'
    }
  ]
  about2 = `Software Developer wisth ${this.experience} of experience .
  Worked with Software Development Life Cycle(SDLC) methodologies .
  Expertise in Angular All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Angular, Nodejs, MongoDB, React, Javascript, Typescript and Python`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://drive.google.com/file/d/1CAlpO3k2Ouky3xCrXEYJJkzHauUd-bil/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'MONOGO DB',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'PYTHON',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2016 - 2020',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Technology',
      'institution': 'Bheema Institute of Technology and Science, Adoni',
      'info': ``
    },
    {
      'id': '2',
      'from_to_year': '2014 - 2016',
      'education': 'Intermediate (10+2)',
      'stream': 'M.P.C',
      'institution': 'Dr. Jyothirmayi Memorial Junior College, Adoni',
      'info': ``
    },
    {
      'id': '3',
      'from_to_year': '2013 - 2014',
      'education': 'S.S.C',
      'stream': '10th standard',
      'institution': 'Z.P.High School, Mantralayam',
      'info': ``
    }
  ];
  exprienceData: any = [
    {
      id: 1,
      company: 'Signdesk.com',
      location: 'Bangalore',
      timeline: 'Dec 2021 to Present',
      role: 'MEAN Stack Developer',
      work: 'Working as an MEAN full stack developer.'

    }

  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}

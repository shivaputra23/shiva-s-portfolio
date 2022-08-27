import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'CRUD operation using MEAN stack',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
      githurl: 'https://github.com/mehulk05/Blog-using-mean',
      mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      imgUrl: 'assets/images/z27.png',
      tech: 'Angular 10, Node, MongoDB, Express'
    },

    {
      id: 2,
      title: 'Multiroom Chat Application in Node JS',
      desc: '',
      livedemo: 'https://chatapp-using-node.herokuapp.com/',
      githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
      mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
      imgUrl: 'assets/images/z23.png',
      tech: 'Node JS,Socket IO'
    },

    {
      id: 3,
      title: 'Hacker News App using ReactJS ',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/shivaputra23/Hacker-News-Clone.git',
      mediumlink: '',
      imgUrl: 'assets/images/z24.png',
      tech: 'React JS, XMl to JSON'
    },
    {
      id: 4,
      title: 'Weather App with React',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z9.png',
      tech: 'React, Open MAp Api'
    },
    {
      id: 5,
      title: 'Personal Portfolio Using HTML,CSS,Javascript',
      desc: '',
      livedemo: 'http://shivaputra-profile.herokuapp.com/',
      githurl: 'https://github.com/shivaputra23/Portfolio.git',
      mediumlink: ':',
      imgUrl: 'assets/images/z11.png',
      tech: 'HTML, CSS, Javascript'
    },
    {
      id: 6,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z12.png',
      tech: 'Angular,Bootstrap'
    }
  ]
  about2 = `Software Developer with 1 year of experience .
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
      role: 'MEAN Software Developer',
      work: 'Working as an full stack developer.'

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

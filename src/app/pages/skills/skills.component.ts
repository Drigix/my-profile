import { Component, OnInit } from '@angular/core';

interface ITechnology {
  id?: number | null;
  img?: string | null;
  rate?: number | null;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  rate = 3;
  myDatabaseTechnologies: ITechnology[] = [];
  myBackendTechnologies: ITechnology[] = [];
  myFrontendTechnologies: ITechnology[] = [];
  myHostingTechnologies: ITechnology[] = [];
  myProgramTechnologies: ITechnology[] = [];
  myOtherTechngologies: ITechnology[] = [];
  constructor() { }

  ngOnInit() {
    this.myDatabaseTechnologies = [
      {
        id: 1,
        img: 'https://www.vectorlogo.zone/logos/sqlite/sqlite-ar21.svg',
        rate: 3
      },
      {
        id: 2,
        img: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg',
        rate: 4
      },
      {
        id: 3,
        img: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg',
        rate: 1
      },
      {
        id: 4,
        img: 'https://www.vectorlogo.zone/logos/docker/docker-ar21.svg',
        rate: 1
      }
    ];
    this.myBackendTechnologies = [
      {
        id: 1,
        img: 'https://www.vectorlogo.zone/logos/java/java-ar21.svg',
        rate: 4
      },
      {
        id: 2,
        img: 'https://www.vectorlogo.zone/logos/springio/springio-ar21.svg',
        rate: 4
      },
      {
        id: 3,
        img: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg',
        rate: 2
      },
      {
        id: 4,
        img: 'https://www.vectorlogo.zone/logos/nestjs/nestjs-ar21.svg',
        rate: 3
      },
      {
        id: 5,
        img: 'https://vectorwiki.com/images/v21Kn__swaggerhub.svg',
        rate: 3
      }
    ];
    this.myFrontendTechnologies  = [
      {
        id: 1,
        img: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
        rate: 4
      },
      {
        id: 2,
        img: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
        rate: 4
      },
      {
        id: 3,
        img: 'https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg',
        rate: 3
      },
      {
        id: 4,
        img: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
        rate: 4
      },
      {
        id: 5,
        img: 'https://www.vectorlogo.zone/logos/angular/angular-icon.svg',
        rate: 4
      },
      {
        id: 6,
        img: 'https://upload.vectorlogo.zone/logos/getbootstrap/images/987f8f6c-263a-47b1-a85d-853cfca215d9.svg',
        rate: 3
      }
    ];
    this.myHostingTechnologies = [
      {
        id: 1,
        img: 'https://www.vectorlogo.zone/logos/github/github-ar21.svg',
        rate: 4
      },
      {
        id: 2,
        img: 'https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21.svg',
        rate: 3
      },
    ];
    this.myProgramTechnologies = [
      {
        id: 1,
        img: 'https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg',
        rate: 4
      },
      {
        id: 2,
        img: 'https://vectorwiki.com/images/ZgSyR__intellij-idea.svg',
        rate: 2
      },
    ];
    this.myOtherTechngologies = [
      {
        id: 1,
        img: 'https://raw.githubusercontent.com/cncf/landscape/master/hosted_logos/jhipster.svg',
        rate: 3
      }
    ];
  }
}

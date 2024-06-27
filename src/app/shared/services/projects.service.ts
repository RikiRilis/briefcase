import { v4 as uuid } from 'uuid';
import { Projects } from '../interfaces/projects.interface';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProjectsService {
  private projects = [
    {
      id: uuid(),
      title: 'Easy Short',
      description: 'A simply and easy-to-use URL short app for any URL you want to cute, with a basic web page. Don\'t lose your time and short your URL\'s with Easy Short!',
      imgUrl: 'https://rikirilis.xyz/assets/easy-short.webp',
      projectUrl: 'https://rikirilis.xyz/projects/easy-short',
      tecnologies: ['Angular', 'Tailwind CSS', 'TypeScript'],
      gitCodeUrl: 'https://github.com/RikiRilis/easy-short'
    },
    {
      id: uuid(),
      title: 'NG Pipelines',
      description: 'A web app where you can find all the pipes used in Angular projects and personalize your own pipes in an unique place.',
      imgUrl: 'https://rikirilis.xyz/assets/ng-pipelines.webp',
      projectUrl: 'https://rikirilis.xyz/projects/ng-pipelines',
      tecnologies: ['Angular', 'Tailwind CSS', 'TypeScript'],
      gitCodeUrl: 'https://github.com/RikiRilis/ng-pipelines'
    },
    {
      id: uuid(),
      title: 'Stop Trivia',
      description: 'This is the mythical game of \'STOP!\'. Made with realtime game experience and easy-to-play. It\'s not an extraordinary game, but if you want to play \'STOP!\' without paper and pen, then play Stop Trivia in you phone with Android.',
      imgUrl: 'https://rikirilis.xyz/assets/stop-trivia.webp',
      projectUrl: 'https://rikirilis.xyz/projects/stop-trivia',
      tecnologies: ['Kotlin', 'Supabase', 'Realtime', 'DaggerHilt', 'AdMob', 'Android'],
      gitCodeUrl: 'https://github.com/RikiRilis/stop-trivia'
    },
    {
      id: uuid(),
      title: 'ANJOCC Oficial',
      description: 'The oficial website for ANJOCC (Asosiación Nacional de Jóvenes Candeleros de Cristo) from Dominican Republic, with an user loggin, registration form, Supabase DB and more...',
      imgUrl: 'https://rikirilis.xyz/assets/anjocc-oficial.webp',
      projectUrl: 'https://anjocc.com',
      tecnologies: ['Angular', 'Tailwind CSS', 'Supabase', 'TypeScript'],
      gitCodeUrl: 'https://github.com/RikiRilis/anjocc-oficial'
    },
  ];

  getProjets(): Projects[] {
    return this.projects;
  }
}

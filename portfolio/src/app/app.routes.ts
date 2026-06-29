import { Routes } from '@angular/router';
import { Client } from './client/client';
import { Home as clientHome } from './client/home/home';
import { About as clientAbout } from './client/about/about';
import { Skill as clientSkill } from './client/skill/skill';
import { Project as clientProject } from './client/project/project';
import { Education as clientEducation} from './client/education/education';
import { Contact as clientContract} from './client/contact/contact';
import { Admin } from './admin/admin';
import { Home } from './admin/home/home';
import { About } from './admin/about/about';
import { Skill } from './admin/skill/skill';
import { Project } from './admin/project/project';
import { Education } from './admin/education/education';
import { Contact } from './admin/contact/contact';
import { NotFound } from './shared/not-found/not-found';


export const routes: Routes = [
    {path: '', component: Client, children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: clientHome},
        {path: 'about', component: clientAbout},
        {path: 'skill', component: clientSkill},
        {path: 'project', component: clientProject},
        {path: 'education', component: clientEducation},
        {path: 'contact', component: clientContract},
    ]},
    {path: 'admin', component: Admin, children: [
        {path: 'home', component: Home},
        {path: 'about', component: About},
        {path: 'skill', component: Skill},
        {path: 'project', component: Project},
        {path: 'education', component: Education},
        {path: 'contact', component: Contact},
    ]},

    {path: '**', component: NotFound},
];

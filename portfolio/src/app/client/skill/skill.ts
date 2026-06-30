import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SkillService } from '../../core/services/skill-service';
import { ISkill } from '../../core/models/skill-model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill implements OnInit{

  constructor(private _skillService: SkillService, private _cdr: ChangeDetectorRef, private _sanitizer: DomSanitizer) {};


  sanitizeSvg(svg: string): SafeHtml {
  return this._sanitizer.bypassSecurityTrustHtml(svg);
  }

  skills!: ISkill[];

  ngOnInit(): void {
    this._skillService.getSkill().subscribe((data) => {
      this.skills = data;
      this._cdr.detectChanges();
      console.log(data);
    })
  }
}

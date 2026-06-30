import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SkillService } from '../../core/services/skill-service';
import { Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ISkill } from '../../core/models/skill-model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-skill',
  imports: [ReactiveFormsModule],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill implements OnInit{

  constructor(
    private _skillService: SkillService,
    private _cdr: ChangeDetectorRef,
    private _sanitizer: DomSanitizer) {}

    // note to self: since innerHtml blocks svg, we use this sanitizer thing to bypass it
    sanitizeSvg(svg: string): SafeHtml {
      return this._sanitizer.bypassSecurityTrustHtml(svg);
    }


  skills!: ISkill[]
  editId: string | null= null

  addForm = new FormGroup({
    text: new FormControl('', [Validators.required]),
    svg: new FormControl('', [Validators.required])
  });

  editForm = new FormGroup({
    text: new FormControl('', [Validators.required]),
    svg: new FormControl('', [Validators.required])
  });



  ngOnInit(): void {
    this._skillService.getSkill().subscribe((data: ISkill[]) => {
      this.skills = data;
      this._cdr.detectChanges();
    });
  }
  // note to self: since the default svg contains "" and new lines,
  // which gets cut off when getiing stored in the database
  // so a cleaning function was a must here
  // ?? means if svg is null or undefined go with the right side instead
  cleanSvg(svg: string | null | undefined) {
    return (svg ?? '').replaceAll(`"`, `'`).replaceAll(`\n`, '');
  }


  onAdd() {
    const cleanedData = {
      text: this.addForm.value.text ?? '',
      svg: this.cleanSvg(this.addForm.value.svg)
    };

    this._skillService.addSkill(cleanedData).subscribe((newSkill) => {
      this.skills.push(newSkill);
      this.addForm.reset();
      this._cdr.detectChanges();
      console.log(newSkill);
    })
  }

  startEdit(skill: ISkill) {
  this.editId = skill._id ?? null;
  this.editForm.patchValue(skill);
  }



  onEdit() {

    if(!this.editId) return;

    const cleanedData = {
      text: this.editForm.value.text ?? '',
      svg: this.cleanSvg(this.editForm.value.svg)
    };

    this._skillService.updateSkill(this.editId, cleanedData).subscribe((updatedSkill) => {
      const index = this.skills.findIndex((s) => s._id === this.editId);
      this.skills[index] = updatedSkill;
      this.editId = null;
      this._cdr.detectChanges();
    })
  }



  onDelete(id: string) {
    this._skillService.deleteSkill(id).subscribe(() => {
      this.skills = this.skills.filter((skill) => skill._id !== id);
      this._cdr.detectChanges();
    })
  }
}

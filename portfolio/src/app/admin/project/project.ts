  import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
  import { ProjectService } from '../../core/services/project-service';
  import { IProject } from '../../core/models/project-model';
  import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

  @Component({
    selector: 'app-project',
    imports: [ReactiveFormsModule],
    templateUrl: './project.html',
    styleUrl: './project.css',
  })
  export class Project implements OnInit{

    constructor(private _projectService: ProjectService, private _cdr: ChangeDetectorRef) {};

    projects!: IProject[]
    editId: string | null = null
    selectedFile: File | null = null

    addForm = new FormGroup({
      text: new FormControl(''),
      link: new FormControl(''),
      image: new FormControl(null)
    });
    editForm = new FormGroup({
      text: new FormControl(''),
      link: new FormControl(''),
      image: new FormControl('')
    });


    
    ngOnInit(): void {
      this._projectService.getProject().subscribe((data) => {
        this.projects = data;
        this._cdr.detectChanges();
      })
    };


    onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.addForm.patchValue({ image: file });
    }
    } 
    onEditFileChange(event: any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.editForm.patchValue({ image: file });
      }
    }


    onAdd() {
      const formData = new FormData();
      formData.append('text', this.addForm.value.text ?? '');
      formData.append('link', this.addForm.value.link ?? '');
      formData.append('image', this.addForm.value.image!);
      
      this._projectService.addProject(formData).subscribe((newProject) => {
        this.projects.push(newProject);
        this.addForm.reset();
        this._cdr.detectChanges();
      })
    }




    startEdit(project: IProject) {
      this.editId = project._id ?? null;
      this.editForm.patchValue(project);
    };

    onEdit() {

      if(!this.editId) return;

      const formData = new FormData();
      formData.append('text', this.editForm.value.text ?? '');
      formData.append('link', this.editForm.value.link ?? '');
      if (this.editForm.value.image) {
        formData.append('image', this.editForm.value.image);
      }

      this._projectService.updateProject(this.editId, formData).subscribe((updatedproject: IProject) => {
        const index = this.projects.findIndex((s) => s._id === this.editId);
        this.projects[index] = updatedproject;
        this.editId = null;
        this._cdr.detectChanges();
      })
    };

    onDelete(id: string) {
      this._projectService.deleteProject(id).subscribe(() => {
        this.projects = this.projects.filter((project) => project._id !== id);
        this._cdr.detectChanges();
      })
    };

  }

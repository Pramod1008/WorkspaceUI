import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminTypeService } from 'src/app/Service/admin-type.service';
import { AlertService } from 'src/app/_services';

@Component({
  selector: 'app-add-edit-admin-type',
  templateUrl: './add-edit-admin-type.component.html',
  styleUrls: ['./add-edit-admin-type.component.css']
})
export class AddEditAdminTypeComponent implements OnInit {

  admintypeForm:FormGroup;
  title: string = "Create"; 
  id: number;
  isEditMode: boolean=false;
  loading = false;
  submitted = false;

  constructor(private _fb: FormBuilder,
    private service:AdminTypeService, 
    private router: Router,
    private _Activatedroute: ActivatedRoute,   
    private alertService: AlertService) {
      if(this._Activatedroute.snapshot.params["id"]){
        this.id=this._Activatedroute.snapshot.params["id"];
        }
        this.initializeForm();
     }

  @Input() admintype :any;

  ngOnInit(): void { 
    if(this.id>0){
      this.title="Edit";
      this.isEditMode=true;
      this.service.getAdminType(this.id)
      .subscribe(resp=>this.admintypeForm.setValue(resp)
      ,error=>this.alertService.error(error)
      )
    }
  }

  initializeForm():void {
    this.admintypeForm = this._fb.group({   
      Id   :0,
      TypeName: ['', Validators.required] ,
      IsActive:true 
  }) 
  }
  
  onSubmit(){
    if(!this.admintypeForm.valid){
      return
    }
    if(!this.isEditMode)
    {
      this.AddAdminType();
    }else{
      this.UpdateAdminType();
    }     
  }

  private UpdateAdminType() {
    console.log("Update");
    this.service.updateAdminType(this.admintypeForm.value)
      .subscribe(
        res => {
          if (res == "1") {
            this.alertService.success('Update data successfully', true);
            this.resetForm();
            this.router.navigate(['/showadmintype']);
          } else {
            this.alertService.error('Something went wrong', true);
            this.router.navigate(['/admintype']);
          }
        },
        err => {
          this.alertService.error('Something went wrong contact Adminstrator', true);
        }
      );
  }

  private AddAdminType() {
    this.service.postAdminType(this.admintypeForm.value)
      .subscribe(
        res => {
          if (res == "1") {
            this.alertService.success('Inserted data successfully', true);
            this.resetForm();
            this.router.navigate(['/showadmintype']);
          } else {
            this.alertService.error('Something went wrong', true);
            this.router.navigate(['/admintype']);
          }
        },
        err => {
          this.alertService.error('Something went wrong contact Adminstrator', true);
        }
      );
  }

  resetForm(form?: FormBuilder){
    this.service.formData={
      Id:0,
      TypeName:'',
      isActive:true
    }
  }
}



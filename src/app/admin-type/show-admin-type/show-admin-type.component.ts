import {AfterViewInit, ViewChild,Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminType } from 'src/app/Model/admin-type.model';
import { AdminTypeService } from 'src/app/Service/admin-type.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AlertService } from 'src/app/_services';

@Component({
  selector: 'app-show-admin-type',
  templateUrl: './show-admin-type.component.html',
  styleUrls: ['./show-admin-type.component.css']
})
export class ShowAdminTypeComponent implements OnInit  {

  displayedColumns: string[] = ['Id', 'TypeName','IsActive','update','delete'];
  dataSource: MatTableDataSource<AdminType>;

  constructor(private adminTypeService:AdminTypeService,
    private router: Router,   
    private alertService: AlertService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // ngAfterViewInit(): void {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
  AdminTypeList:any=[];

  ModalTitle:string='';
  ActivateAddEditAdminType:boolean=false;
  admintype:any;
  id:number;

  ngOnInit(): void {
    this.adminTypeList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  adminTypeList(){
      this.adminTypeService.getAdminTypeList().subscribe(data=>{  
     this.dataSource=new MatTableDataSource(data);
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
    });
  }

  delete(id:number) {  
     var ans = confirm("Do you want to delete Admin type with Id: " + id);  
    if (ans) {  
        this.adminTypeService.deleteAdminType(id).subscribe((res) => {  
          if (res == "1") {
            this.alertService.success('Delete data successfully', true);
            this.adminTypeList();
          } else {
            this.alertService.error('Something went wrong', true);
            this.router.navigate(['/admintype']);
          }
        }, error => console.error(error))  
    }  
}  

}

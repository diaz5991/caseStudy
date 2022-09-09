import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MyClaimsDataService } from '../../services/data/my-claims-data.service';
import Swal from 'sweetalert2';
import { UpdateClaimComponent } from '../Dialogs/update-claim/update-claim.component';
import { MatDialog } from '@angular/material/dialog';
import { FilesService } from 'src/app/services/data/files.service';

@Component({
  selector: 'app-my-claims',
  templateUrl: './my-claims.component.html',
  styleUrls: ['./my-claims.component.css']
})
export class MyClaimsComponent implements OnInit {

  displayedColumns: string[] = ['claimNumber', 'description', 'status', 'color', 'download', 'actions'];
  dataSource!: MatTableDataSource<any>;
  tamanioTable = 0;
  @ViewChild('paginator', { static: false }) paginator!: MatPaginator;

  maxDate = new Date();
  claimsTable: Array<any> = [];
  claimsTableFiltered: Array<any> = [];

  claimNumber = '';
  description = '';
  creationDate: Date = new Date();

  constructor(
    private claimsService: MyClaimsDataService,
    private router: Router,
    private dialog: MatDialog,
    private fileService: FilesService
  ) { }

  ngOnInit(): void {
    this.refreshMyClaims()
  }
  refreshMyClaims(): void {
    this.claimsService.getAllClaims().subscribe(
      response => {
        this.claimsTable = response;
        this.claimsTableFiltered = this.claimsTable;
        this.dataSource = new MatTableDataSource(this.claimsTableFiltered);
        this.tamanioTable = this.dataSource.data.length;
        this.dataSource.paginator = this.paginator;
        console.log("aqui esta el refresh")
      }
    )
  }
  applyFilter(): void {
    this.claimsTableFiltered = this.claimsTable;
    this.claimsTableFiltered = this.claimsTableFiltered.filter((filter) => {
      return filter.id.toString().toLowerCase().includes(this.claimNumber.toString().toLowerCase()) &&
        filter.description.toLowerCase().includes(this.description.toString().toLowerCase())
    });
    this.dataSource = new MatTableDataSource(this.claimsTableFiltered);
    this.tamanioTable = this.dataSource.data.length;
    this.dataSource.paginator = this.paginator;
  }
  cleanFilter(): void {
    this.claimsTableFiltered = this.claimsTable;
    this.dataSource = new MatTableDataSource(this.claimsTableFiltered);
    this.tamanioTable = this.dataSource.data.length;
    this.dataSource.paginator = this.paginator;
  }
  downloadFile(id: string): void {
    this.fileService.viewFile(id).subscribe((resp) => {
     const file = new Blob([resp.body],{type : 'application/pdf'});
     const fileURL = URL.createObjectURL(file);
     window.open(fileURL, '_blank');
    },
    (_) => {
      Swal.fire({
        icon: 'error',
        html: 'File cannot be found',
        showCloseButton : true,
        showConfirmButton : false,
        timer : 3000
      });
    });
  }
  deleteClaim(id: number): void {
    this.claimsService.deleteClaim(id).subscribe((response) => {
      console.log(response)
    },
      (_) => {
        Swal.fire({
          icon: 'success',
          title: 'Claim Deleted',
          html: 'Claim has been deleted.',
          showConfirmButton: false,
          showCloseButton: true,
          timer: 3000
        });
        this.refreshMyClaims();
      })
  }
  updateClaim(id: number) {
    const dialogRef = this.dialog.open(UpdateClaimComponent, {
      width: '550px',
      data: {
        id
      }
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== 'false') {
        const data = {
          ...res,        
          id
        };
        this.claimsService.updateClaim(data).subscribe((resp) => {
          this.refreshMyClaims();
          Swal.fire({
            icon: 'success',
            title: 'Update Claim',
            html: 'Claim updated succeded.',
            showCloseButton: true,
            showConfirmButton: false,
            timer: 3000
          });
        });
      }
    });
  }
  addClaim() {
    this.router.navigate(['addclaim']);
  }
}


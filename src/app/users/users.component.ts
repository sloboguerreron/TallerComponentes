import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitUsuarios } from '../git-usuarios';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  searchUsers: GitUsuarios;
  searchQueryUsers: string;
  displayQueryUsers: string;
  

  constructor(private GitSearchService: GitSearchService) { }

  ngOnInit() {
    this.searchQueryUsers = 'pedro';
    this.displayQueryUsers = this.searchQueryUsers;
    this.gitUsuarios();
  }

  gitUsuarios =()=>{
    this.GitSearchService.users(this.searchQueryUsers).then((response)=>{
      this.searchUsers = response;
      this.displayQueryUsers= this.searchQueryUsers;
      //alert('Total repositories found: '+response.total_count);
    },(error) => {
      alert('Error: '+ error.statusText);
    })
    
  
  }

}
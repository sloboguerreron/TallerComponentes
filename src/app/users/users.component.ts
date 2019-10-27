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
  searchQuery: string;
  displayQuery: string;
  

  constructor(private GitSearchService: GitSearchService) { }

  ngOnInit() {
    this.searchQuery = 'pedro';
    this.displayQuery = this.searchQuery;
    this.gitUsuarios();
  }

  gitUsuarios =()=>{
    this.GitSearchService.users(this.searchQuery).then((response)=>{
      this.searchUsers = response;
      this.displayQuery= this.searchQuery;
      //alert('Total repositories found: '+response.total_count);
    },(error) => {
      alert('Error: '+ error.statusText);
    })
    
  
  }

}
import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitUsuarios } from '../git-usuarios';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  searchResults: GitUsuarios;
  searchQuery: string;
  displayQuery: string;
  title: string;
  page:string;
  

  constructor(private GitSearchService: GitSearchService,private route: ActivatedRoute,private router: Router) { }

 ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
      if(params.get('page'))
        this.page = params.get('page');
      else
        this.page = "0";
      this.gitUsuarios();
    })
    this.route.data.subscribe((result) => {
      this.title = result.title
    });

  }

  gitUsuarios =()=>{
    this.GitSearchService.users(this.searchQuery, this.page).then((response)=>{
      this.searchResults = response;
      this.displayQuery= this.searchQuery;
      //alert('Total repositories found: '+response.total_count);
    },(error) => {
      alert('Error: '+ error.statusText);
    })
    
  
  }

}
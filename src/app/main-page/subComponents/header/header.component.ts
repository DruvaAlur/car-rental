import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MainPageService } from '../../main-page.service';
import { debounceTime, distinctUntilChanged, mergeMap, startWith, switchMap } from 'rxjs';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchText:FormControl=new FormControl('');
  suggestions:{_id:string,name:string}[]=[]
  suggestionClicked:boolean=false;
  constructor(private mainPageService:MainPageService,private router: Router){

  }

  ngOnInit(){
    this.searchText.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query=>this.mainPageService.getSearchSuggestions(query))
    ).subscribe(
      (suggestions:{_id:string,name:string}[])=>{
        this.suggestions=suggestions
      }
    )
  }

  onItemSelection(){
    this.mainPageService.getSearchResults(this.searchText.value).subscribe((res)=>{
      this.mainPageService.searchResults(res)
      this.router.navigate(['/Search'])
    })
  }

  onSuggestionClick(suggestion: string) {
    this.searchText.setValue(suggestion)
    this.suggestionClicked = true;
    this.onItemSelection(); 
  }
}

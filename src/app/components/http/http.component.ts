import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  artist = [];

  constructor(private http: HttpClient) {
    this.artist=[];
   }

  ngOnInit(): void {
    this.getData();
    
  }

  getData(){
    this.http.get('https://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?fmt=json')
    .subscribe((result: any) =>
    {
      this.artist = result;
      console.log(this.artist);
    });
    
  
  }

}
  


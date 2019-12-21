import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ws-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonblob.com/api/jsonBlob/965c3979-21f2-11ea-b6f9-a9426392bcb0')
      .subscribe((res) => {
        console.log(res);
      })
  }

}

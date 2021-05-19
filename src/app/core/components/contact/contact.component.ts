import { LayoutcontactComponent } from './components/layoutcontact/layoutcontact.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public url: string = 'contact';
  public activecard: string='';
  Handleclick(cd:LayoutcontactComponent) {
    this.url= 'contact';
  }

}

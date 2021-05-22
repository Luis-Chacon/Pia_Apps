import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { Estrenos } from './tab2.model';
import { PubilicidadServices } from './tab2.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  estrenos : Estrenos[]=[];
  vid = 'https://www.youtube.com/embed/BpdDN9d9Jio';

  constructor(
    private estrenoServices: PubilicidadServices,
    public navCtrl : NavController, 
    private dom : DomSanitizer) {}

  ngOnInit()
  {
    this.estrenos = this.estrenoServices.getAllEstrenos();
    console.log(this.estrenos);
    this.sanitize(this.estrenos[1].trailerUrl);
  }

  sanitize(estrenoURL: string)
  {
    return this.dom.bypassSecurityTrustResourceUrl(this.estrenos[2].trailerUrl);
  }

}

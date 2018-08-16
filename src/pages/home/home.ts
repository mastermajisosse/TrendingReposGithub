import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  repo = [];
  user_data: any = {};
  user_data_owner :any = {};
  page = 0;

  constructor(public navCtrl: NavController , public rest:RestProvider) {
    this.getProfil(this.page);
  }

  getProfil(infiniteScroll) {
		this.rest.getRepos(this.page).subscribe((data)=>{ 
      this.user_data = data;
      for (let i = 0; i < this.user_data.length; i++) {
        this.repo.push( this.user_data[i] );
      }
      console.log('my data : ');console.log(this.user_data);
      if(infiniteScroll)
          infiniteScroll.complete();
	    });
  }
  
  doInfinite(infiniteScroll) {
    this.page += 1;
    this.getProfil(infiniteScroll);
  console.log('Begin async operation');
  }
}

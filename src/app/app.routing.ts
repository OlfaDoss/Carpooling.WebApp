import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ListCarpoolsComponent } from './list-carpools/list-carpools.component';
import { DetailCarpoolComponent } from './detail-carpool/detail-carpool.component';
import { AddCarpoolComponent } from './add-carpool/add-carpool.component';
import { EditCarpoolComponent } from './edit-carpool/edit-carpool.component';
import { SearchCarpoolComponent } from './search-carpool/search-carpool.component';




export const routing = RouterModule.forRoot([

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'carpools',
    component: ListCarpoolsComponent
  },
  {
    path: 'detail/:Id',
    component: DetailCarpoolComponent
  },
  {
    path: 'addcarpool',
    component: AddCarpoolComponent
  },
  {
    path: 'editcarpool/:Id',
    component: EditCarpoolComponent
  },

 {
    path: 'search',
    component: SearchCarpoolComponent
  },
  /*{
    path: 'souscription',
    component: AccountComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

 */
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

]);

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { LayersComponent } from './components/layers/layers.component';


const routes: Routes = [
	//{ path: 'layers', component: LayersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

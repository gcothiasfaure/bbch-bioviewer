//Import des Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayersComponent } from './components/layers/layers.component';
import { MenuOutilsComponent } from './components/menu-outils/menu-outils.component';
import { SousMenuBasemapComponent } from './components/sous-menus-outils/sous-menu-basemap/sous-menu-basemap.component';
import { SousMenuContoursTerritComponent } from './components/sous-menus-outils/sous-menu-contours-territ/sous-menu-contours-territ.component';
import { ModuleRechercheComponent } from './components/module-recherche/module-recherche.component';
import { SousMenuMesureComponent } from './components/sous-menus-outils/sous-menu-mesure/sous-menu-mesure.component';
import { RechercheSelectionComponent } from './components/recherche-selection/recherche-selection.component';
import { InfoCoucheComponent } from './components/info-couche/info-couche.component';

//Import des APIs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextFieldModule } from '@angular/cdk/text-field';

//Imports des APIs Material
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,
    LayersComponent,
    MenuOutilsComponent,
    SousMenuBasemapComponent,
    SousMenuContoursTerritComponent,
    ModuleRechercheComponent,
    SousMenuMesureComponent,
    RechercheSelectionComponent,
    InfoCoucheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  	HttpClientModule,
    BrowserAnimationsModule,
  	MatSliderModule,
  	MatExpansionModule,
  	MatCardModule,
  	MatAutocompleteModule,
  	MatTabsModule,
  	MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    TextFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatBadgeModule
  ],
  providers: [LayersComponent,InfoCoucheComponent],
  bootstrap: [AppComponent]
})


export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { PrintBookingComponent } from './print-booking/print-booking.component';
import { PrintBookingDetailsComponent } from './print-booking-details/print-booking-details.component';
import { ApolloModule, APOLLO_FLAGS, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { OrderSearchComponent } from './order-search/order-search.component';
import { OrderBookingComponent } from './order-booking/order-booking.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MaterialDefsModule } from './material-defs/material-defs.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PrintBookingComponent,
    PrintBookingDetailsComponent,
    OrderSearchComponent,
    OrderBookingComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    ApolloModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [
    {
      provide: APOLLO_FLAGS,
      useValue: {
        useInitialLoading: true, // enable it here
      },
    },{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        
        link: httpLink.create({
          uri: 'http://localhost:3000/graphql/',
        }),
      };
    },
    deps: [HttpLink],
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

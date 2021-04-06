import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'vehicle',
    loadChildren: () => import('./vehicle/vehicle.module').then( m => m.VehiclePageModule)
  },
  {
    path: 'insurance',
    loadChildren: () => import('./insurance/insurance.module').then( m => m.InsurancePageModule)
  },
  {
    path: 'garage',
    loadChildren: () => import('./garage/garage.module').then( m => m.GaragePageModule)
  },
  {
    path: 'documents',
    loadChildren: () => import('./documents/documents.module').then( m => m.DocumentsPageModule)
  },
  {
    path: 'servicedetails',
    loadChildren: () => import('./servicedetails/servicedetails.module').then( m => m.ServicedetailsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'thankyou',
    loadChildren: () => import('./thankyou/thankyou.module').then( m => m.ThankyouPageModule)
  },
  {
    path: 'workorder',
    loadChildren: () => import('./workorder/workorder.module').then( m => m.WorkorderPageModule)
  },
  {
    path: 'garageinner',
    loadChildren: () => import('./garageinner/garageinner.module').then( m => m.GarageinnerPageModule)
  },
  {
    path: 'updatevehicle',
    loadChildren: () => import('./updatevehicle/updatevehicle.module').then( m => m.UpdatevehiclePageModule)
  },
  {
    path: 'addvehicle',
    loadChildren: () => import('./addvehicle/addvehicle.module').then( m => m.AddvehiclePageModule)
  },  {
    path: 'plan',
    loadChildren: () => import('./plan/plan.module').then( m => m.PlanPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

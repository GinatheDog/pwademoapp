import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [

  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard] },
//  {
//    path: '',
    // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
//  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'messages', loadChildren: './pages/messagesystem/messages/messages.module#MessagesPageModule', canActivate: [AuthGuard] },
  { path: 'post', loadChildren: './pages/messagesystem/post/post.module#PostPageModule', canActivate: [AuthGuard]  },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

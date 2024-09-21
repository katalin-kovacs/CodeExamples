// Simple routing

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//------------------------------------------------------------
// Guards
@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  consturctor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}

//------------------------------------------------------------
// Lazy loading

const lazyRoutes: Routes = [
  {
    path: "feature",
    loadChildren: () => import("./feature/feature.module".then((m) => m.FeatureModule)),
  },
];

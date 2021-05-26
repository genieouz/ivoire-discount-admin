import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginGQL } from 'src/generated/graphql';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage = null;
  public loginForm: FormGroup;
  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly loginGQL: LoginGQL,
    private readonly authService: AuthService
  ) {
    this.createLoginForm();
    this.createRegisterForm();
  }

  owlcarousel = [
    {
      title: "Nos Services",
      desc: "Automatisation, Notifications en temps réels, Bloc note rappels, Forum collaboratif.",
    },
    {
      title: "Nos Services",
      desc: "Recompense du meilleur commerçant chaque trimètre et aussi d'un client.",
    },
    {
      title: "Nos Services",
      desc: "Faites livrer votre commande partout en cote d'ivoire rapidité - éfficacité - sécurité.",
    },
    {
      title: "Nos Services",
      desc: "Acheter n'a jamais été aussi facile et garantit ...",
    },
    {
      title: "Nos Services",
      desc: "Vendez le plus simplement possible Tout en profitant de la vie ...",
    },
    {
      title: "Nos Services",
      desc: "Cadeau, Aucune commission à la différence des autres plateformes.",
    }
  ]
  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true
  };

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    })
  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      userName: [''],
      password: [''],
      confirmPassword: [''],
    })
  }


  ngOnInit() {
  }

  onSubmit() {

  }
  login() {
    this.errorMessage = null;
    console.log(this.loginForm.value)
    this.loginGQL.fetch({ loginInput: this.loginForm.value }).subscribe(
      ({ data, errors}) => {
        console.log({ data, errors})
        if(errors) {
          this.errorMessage = "Email ou mot de passe incorrecte";
        } else {
          this.authService.registerToken(data.login.token);
          this.router.navigate(['/dashboard']);
        }
      },
      (error) => {
        console.log(error)
        this.errorMessage = "Email ou mot de passe incorrecte";
      }
    )
  }
}
